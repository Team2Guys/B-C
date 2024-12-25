"use client"
import axios from "axios";
import { useAppSelector } from "components/Others/HelperRedux";
import showToast from "components/Toaster/Toaster";
import React,{ useState, useEffect } from "react";
import Cookies from 'js-cookie';


interface IComment {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  status?: string;
}

const Comments = ({ currentComments }: { currentComments: any[] }) => {
  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
  const canEditBlog =loggedInUser &&(loggedInUser.role == 'Admin' ? loggedInUser.canEditBlog : true);

  const token = Cookies.get('2guysAdminToken');
  const superAdminToken = Cookies.get('superAdminToken');
  let finalToken = token ? token : superAdminToken;
  const headers = {
    authorization: `Bearer ${finalToken}`,
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [comments, setComments] = useState(currentComments);

  useEffect(() => {
    setComments(currentComments.map(item => ({
      ...item,
      comments: item.comments.map((comment: IComment) => ({
        ...comment,
        status: comment.status || "pending",
      })),

    })));
  }, [currentComments]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleApprove = async (id: number, type: string, comment: any, item: any) => {


    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/comment/status/${comment.id}`, {
        status: 'APPROVED',
      },{headers});
      if (res.status === 200) {

        showToast('success', "Comment approved successfully🎉");
        comment.status = 'APPROVED';
        setComments(prevComments =>
          prevComments.map(i =>
            i.id === item.id
              ? {
                ...i,
                comments: i.comments.map((c: IComment) =>
                  c.id === comment.id ? { ...c, status: 'APPROVED' } : c
                ),
              }
              : i
          )
        );
      }
      console.log(`Approved ${type} comment with ID: ${id}`, {
        title: item.title || "No Title",
        comment: comment.description,
        status: comment.status,
        createdAt: comment.createdAt,
        name: comment.name,
      });
    } catch (error) {
      console.error("Error approving the comment:", error);
      showToast('error', "Facing issue to APPROVED😢");
    }

  };

  const handleReject = async (id: number, type: string, comment: any) => {


    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/comment/status/${comment.id}`, {
        status: 'REJECTED',
      },{headers}
    );
      if (res.status === 200) {

        showToast('success', "Comment Status updated successfully🎉");
        comment.status = 'REJECTED';
        setComments(prevComments =>
          prevComments.map(i =>
            i.id === comment.id
              ? {
                ...i,
                comments: i.comments.map((c: IComment) =>
                  c.id === comment.id
                    ? { ...c, status: 'REJECTED' }
                    : c
                ),
              }
              : i
          )
        );
      }

    } catch (error) {
      console.error("Error approving the comment:", error);
      showToast('error', "Facing update status😢");
    }

    console.log(`Rejected ${type} comment with ID: ${id}`);
  };

  const filterComments = (item: any) => {
    const term = searchTerm.toLowerCase();

    const hasComments = item.comments && item.comments.length > 0;
    if (!hasComments) return false;
    const titleMatch = item.title.toLowerCase().includes(term);
    const commentMatches = item.comments.some((comment: any) =>
      comment.name.toLowerCase().includes(term) ||
      comment.description.toLowerCase().includes(term) ||
      (comment.createdAt && new Date(comment.createdAt).toLocaleString().toLowerCase().includes(term))
    );

    return titleMatch || commentMatches;
  };

  return (
    <>
      <div className="flex justify-between mb-4 items-center flex-wrap text-black dark:text-white">
        <input
          className="peer lg:p-3 p-2 block outline-none border dark:text-black rounded-md border-gray-200 dark:bg-boxdark dark:drop-shadow-none text-sm dark:focus:border-primary focus:border-dark focus:ring-dark-500 disabled:opacity-50 disabled:pointer-events-none"
          type="search"
          placeholder="Search Product"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="w-full">
        <div className="p-2 bg-primary rounded-md">
          {comments && comments.length > 0 ? (
            comments.map((item: any) => {
              if (!filterComments(item)) return null;

              return (
                <div key={item.id} className="mt-4 leading-8 border p-2 bg-white rounded-md shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-2xl font-semibold">{item.title || "No Title"}</h5>
                    <span className="text-darkgrey">
                      {item?.createdAt ? new Date(item.createdAt).toLocaleString() : ''}
                    </span>
                  </div>
                  <div className="pl-6 border-l-2 mt-4">
                    {item.comments.map((comment: any) => (
                      <div key={comment.id} className="mt-4">
                        <div className="flex justify-between items-center">
                          <h5 className="text-lg font-semibold">{comment.name}</h5>
                          <span className="text-darkgrey">
                            {comment.createdAt && new Date(comment.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <p className="leading-normal text-darkgrey text-base mb-4">
                          {comment.description}
                        </p>
                        <div className="flex gap-4 mb-4">
                          <button
                            className={`text-white px-4 py-1 rounded ${ !canEditBlog || comment.status === 'APPROVED' ? 'bg-gray-400': 'bg-green-600 '}`}
                            onClick={() => handleApprove(comment.id, 'comment', comment, item)} 
                            disabled={!canEditBlog || comment.status === 'APPROVED'}
                          >
                            Approve
                          </button>
                          <button
                            className={`text-white px-4 py-1 rounded ${ !canEditBlog ||comment.status === 'REJECTED'  ? 'bg-gray-400': 'bg-red-600 '}`}
                            onClick={() => handleReject(comment.id, 'comment', comment)}
                            disabled={!canEditBlog || comment.status === 'REJECTED'}
                          >
                            Reject
                          </button>
                        </div>

                        <div className="mt-2 text-sm text-gray-500">
                          Status: {comment.status}
                        </div>

                        {/* {comment?.replies && comment.replies.length > 0 && (
                          <div className="mt-4 pl-6 border-l-2">
                            {comment.replies.map((nestedItem: any) => (
                              <div key={nestedItem.id} className="mt-4">
                                <div className="flex justify-between items-center">
                                  <h5 className="text-lg font-semibold">{nestedItem.name}</h5>
                                  <span className="text-darkgrey">
                                    {nestedItem.createdAt && new Date(nestedItem.createdAt).toLocaleString()}
                                  </span>
                                </div>
                                <p className="leading-normal text-darkgrey text-base mb-4">
                                  {nestedItem.description}
                                </p>
                                <div className="flex gap-4 mb-4">
                                  <button
                                    className="text-white bg-green-600 px-4 py-1 rounded"
                                    onClick={() => handleApprove(nestedItem.id, 'reply', nestedItem, item)}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    className="text-white bg-red-600 px-4 py-1 rounded"
                                    onClick={() => handleReject(nestedItem.id, 'reply', nestedItem)}
                                  >
                                    Reject
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )} */}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <p>No comments available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Comments;
