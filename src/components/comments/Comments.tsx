import { Modal } from 'antd';
import { CommentData, NestedCommentData } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsReply } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { RiInstagramFill } from 'react-icons/ri';
import { TiSocialFacebook, TiSocialPinterest } from 'react-icons/ti';
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
type CommentType = 'parent' | 'nested';
type SelectedComment = { id: any; type: CommentType };
interface CommentsProps {
  data: any; // Add the data prop
}

function Comments({ data }: CommentsProps) { // Use the data prop
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<SelectedComment | null>(null);
  const [shareURL, setShareURL] = useState('');
console.log(shareURL,"shareURLshareURL")

useEffect(() => {
  const currentURL = window.location.href; 
  setShareURL(currentURL);
  
  console.log(currentURL)
}, []);
  const totalPages = Math.ceil(CommentData.length / itemsPerPage);

  const currentComments = CommentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '' };
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name cannot contain numbers';
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      setFormData({ name: '', email: '', comment: '' });
    }
  };
  const handleReplyClick = (commentId: number, type: CommentType) => {
    setSelectedComment({ id: commentId, type });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedComment(null);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h4 className="text-20 font-semibold">Comments</h4>
        <div className="text-18 font-normal text-paralight flex items-center gap-2">
          Share:{' '}
          <span className="flex items-center gap-1">
          <FacebookShareButton url={shareURL}>
          <TiSocialFacebook size={20}  />
        </FacebookShareButton>
        <PinterestShareButton url={shareURL} media={data} >
          <TiSocialPinterest size={24}  />
        </PinterestShareButton>
        <WhatsappShareButton
          url={shareURL}
          separator=":: "
        >
          <FaWhatsapp size={20} />
        </WhatsappShareButton>
            {/* <Link target='_blank' href={"https://www.instagram.com/blindsandcurtainsdubai/"}> <RiInstagramFill className='ms-2' /></Link> */}
          </span>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className='sm:max-w-56 w-full'>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
            />
            {errors.name && <p className="text-red-500 text-14">{errors.name}</p>}
            </div>
            <div className='sm:max-w-80 w-full'>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
            />
            {errors.email && <p className="text-red-500 text-14">{errors.email}</p>}
            </div>
          </div>
          <textarea
            name="comment"
            placeholder="Comment"
            required
            value={formData.comment}
            onChange={handleInputChange}
            className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
            rows={4}
          ></textarea>
          <div className="text-end">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-primary rounded-3xl text-16 sm:text-18 font-medium"
            >
              Post Comment
            </button>
          </div>
        </form>
        <p className="text-18 font-normal text-darkgrey mt-2">
          {CommentData.length} Comments
        </p>
        {currentComments.map((item) => (
          <div key={item.id} className="mt-4 leading-8">
            <div className="flex justify-between items-center">
              <h5 className="text-16 font-semibold">{item.userName}</h5>
              <span className="text-darkgrey">{item.createdAt}</span>
            </div>
            <p className="leading-normal text-darkgrey text-18">{item.comment}</p>
            <button className="flex items-center gap-1" onClick={() => handleReplyClick(item.id, 'parent')}>
              <BsReply className="text-red-600" size={18} />
              <span className="font-medium text-16">Reply</span>
            </button>
            {NestedCommentData.map(
              (nestedItem) =>
                item.id === nestedItem.replyId && (
                  <div key={nestedItem.id} className="mt-4 leading-8 ps-6">
                    <div className="flex justify-between items-center">
                      <h5 className="text-16 font-semibold">
                        {nestedItem.userName}
                      </h5>
                      <span className="text-darkgrey">{nestedItem.createdAt}</span>
                    </div>
                    <p className="leading-normal text-darkgrey text-18">
                      {nestedItem.comment}
                    </p>
                    <button className="flex items-center gap-1" onClick={() => handleReplyClick(nestedItem.id, 'nested')}>
                      <BsReply className="text-red-600" size={18} />
                      <span className="font-medium text-16">Reply</span>
                    </button>
                  </div>
                )
            )}
          </div>
        ))}

        <div className="flex justify-center mt-4 gap-2">
          <span
            className={`mx-1 w-16 h-14 flex justify-center items-center font-medium cursor-pointer ${
              currentPage === 1
                ? 'opacity-0'
                : 'hover:bg-btnclr hover:text-white opacity-100'
            }`}
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
            }
          >
            <GoArrowLeft size={25} />
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-6 py-1 border rounded ${
                index + 1 === currentPage ? 'bg-btnclr text-white' : 'bg-transparent'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <span
            className={`mx-1 w-16 h-14 flex justify-center items-center font-medium cursor-pointer ${
              currentPage === totalPages
                ? 'opacity-0'
                : 'hover:bg-btnclr hover:text-white opacity-100'
            }`}
            onClick={() =>
              setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)
            }
          >
            <GoArrowRight size={25} />
          </span>
        </div>
      </div>
   {/* Modal for Reply */}
   <Modal
        title="Reply to Comment"
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
          />
          {errors.name && <p className="text-red-500 text-14">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
          />
          {errors.email && <p className="text-red-500 text-14">{errors.email}</p>}
          <textarea
            name="comment"
            placeholder="Reply Comment"
            required
            value={formData.comment}
            onChange={handleInputChange}
            className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
            rows={4}
          ></textarea>
          <div className="text-end">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-primary rounded-3xl text-16 sm:text-18 font-medium"
            >
              Post Reply
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Comments;
