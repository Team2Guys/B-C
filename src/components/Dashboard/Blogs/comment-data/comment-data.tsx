"use client"
import { useState } from "react";

const Comments = ({ currentComments }: { currentComments: any[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleApprove = (id: number, type: string) => {
    alert(`Approved ${type} comment with ID: ${id}`);
  };

  const handleReject = (id: number, type: string) => {
    alert(`Rejected ${type} comment with ID: ${id}`);
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

    return titleMatch || commentMatches; // Show item if it has comments and either the title or comment matches
  };

  return (
    <>
      {/* Search bar */}
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
          {currentComments && currentComments.length > 0 ? (
            currentComments.map((item: any) => {
              if (!filterComments(item)) return null;

              return (
                <div key={item.id} className="mt-4 leading-8 border p-2 bg-white rounded-md shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-2xl font-semibold">{item.title}</h5>
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
                            className="text-white bg-green-600 px-4 py-1 rounded"
                            onClick={() => handleApprove(comment.id, 'comment')}
                          >
                            Approve
                          </button>
                          <button
                            className="text-white bg-red-600 px-4 py-1 rounded"
                            onClick={() => handleReject(comment.id, 'comment')}
                          >
                            Reject
                          </button>
                        </div>

                        
                        {comment?.replies && comment.replies.length > 0 && (
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
                                    onClick={() => handleApprove(nestedItem.id, 'reply')}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    className="text-white bg-red-600 px-4 py-1 rounded"
                                    onClick={() => handleReject(nestedItem.id, 'reply')}
                                  >
                                    Reject
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
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
