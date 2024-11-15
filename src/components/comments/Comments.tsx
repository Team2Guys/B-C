import { Modal } from 'antd';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
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
import { useQueryClient } from '@tanstack/react-query';



import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
import { toast } from 'react-toastify';
type CommentType = 'parent' | 'nested';
type SelectedComment = { id: any; type: CommentType };
interface CommentsProps {
  data: any;
}

function Comments({ data }: CommentsProps) {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [selectedComment, setSelectedComment] = useState<SelectedComment | null>(null);
  const [shareURL, setShareURL] = useState('');
  const [commentId, setcommentId] = useState('');
  const queryClient = useQueryClient();


  useEffect(() => {
    const currentURL = window.location.href;
    setShareURL(currentURL);

    console.log(currentURL)
  }, []);

  const totalPages = Math.ceil(data?.comments.length / itemsPerPage);



  const currentComments = data?.comments
  .slice()
  .reverse()
  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      let id = !isModalOpen ? data.id : commentId
      let endpoint = !isModalOpen ? "addComments" : "addReply"


      try {
        setloading(true)
        let response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${endpoint}/${id}`, formData)
        if (isModalOpen) {
          setIsModalOpen(false)
        }

        queryClient.invalidateQueries({ queryKey: ['blogs'] });

      } catch (error: any) {
        toast.error(error?.message || "Internal server errorr")
      } finally {
        setloading(false)

      }



      setFormData({ name: '', email: '', description: '' });
    }
  };
  const handleReplyClick = (commentId: string, type: CommentType) => {
    setFormData({ name: '', email: '', description: '' });

    setSelectedComment({ id: commentId, type });
    setcommentId(commentId)
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedComment(null);
  };



  return (
    <div className='w-full'>
      <div className="flex justify-between items-center">
        <h4 className="text-20 font-semibold">Comments</h4>
        <div className="text-18 font-normal text-paralight flex items-center gap-2">
          Share:{' '}
          <span className="flex items-center gap-1">
            <FacebookShareButton url={shareURL}>
              <TiSocialFacebook size={20} />
            </FacebookShareButton>
            <PinterestShareButton url={shareURL} media={data.posterImage.imageUrl} >
              <TiSocialPinterest size={24} />
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
            name="description"
            placeholder="Comment"
            required
            value={formData.description}
            onChange={handleInputChange}
            className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
            rows={4}
          ></textarea>
          <div className="text-end">
            <button
              disabled={loading && !isModalOpen}
              type="submit"
              className="px-6 py-3 text-white bg-primary rounded-3xl text-16 sm:text-18 font-medium"
            >
              {(loading && !isModalOpen) ? <Loader /> : "Post Comment"}
            </button>
          </div>
        </form>

        {(currentComments && currentComments.length > 0) &&
          <p className="text-18 font-normal text-darkgrey mt-2">
          {data?.comments.length} Comments
        </p>
         }

      
        {(currentComments && currentComments.length > 0)  && currentComments.map((item: any) => (
          <div key={item.id} className="mt-4 leading-8">
            <div className="flex justify-between items-center">
              <h5 className="text-16 font-semibold">{item.name}</h5>
              <span className="text-darkgrey">  {item?.createdAt ? new Date(item.createdAt).toLocaleString() : ''}
              </span>
            </div>
            <p className="leading-normal text-darkgrey text-18">{item.description}</p>
            <button className="flex items-center gap-1" onClick={() => handleReplyClick(item.id, 'parent')}>
              <BsReply className="text-red-600" size={18} />
              <span className="font-medium text-16">Reply</span>
            </button>
            {item?.replies.map((nestedItem: any) =>
            (
              <div key={nestedItem.id} className="mt-4 leading-8 ps-6">
                <div className="flex justify-between items-center">
                  <h5 className="text-16 font-semibold">
                    {nestedItem.name}
                  </h5>
                  <span className="text-darkgrey">{nestedItem.createdAt && new Date(nestedItem.createdAt).toLocaleString()}</span>
                </div>
                <p className="leading-normal text-darkgrey text-18">
                  {nestedItem.description}
                </p>
                <button className="flex items-center gap-1" onClick={() => handleReplyClick(item.id, 'nested')}>
                  <BsReply className="text-red-600" size={18} />
                  <span className="font-medium text-16">Reply</span>
                </button>
              </div>
            )
            )}
          </div>
        ))}
        {
          currentComments.length > 0 &&
          <div className="flex justify-center mt-4 gap-2">
          <span
            className={`mx-1 w-16 h-14 flex justify-center items-center font-medium cursor-pointer ${currentPage === 1
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
              className={`px-6 py-1 border rounded ${index + 1 === currentPage ? 'bg-btnclr text-white' : 'bg-transparent'
                }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <span
            className={`mx-1 w-16 h-14 flex justify-center items-center font-medium cursor-pointer ${currentPage === totalPages
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
        }
       
      </div>
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
            name="description"
            placeholder="Reply Comment"
            required
            value={formData.description}
            onChange={handleInputChange}
            className="bg-transparent px-3 py-2 border border-bdrgrey rounded-lg w-full text-bdrgrey text-18"
            rows={4}
          ></textarea>
          <div className="text-end">
            <button
              disabled={loading && isModalOpen}

              type="submit"
              className="px-6 py-3 text-white bg-primary rounded-3xl text-16 sm:text-18 font-medium"
            >
              {loading && isModalOpen ? <Loader /> : "Post Reply"}

            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Comments;
