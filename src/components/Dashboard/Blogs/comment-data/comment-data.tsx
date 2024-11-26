"use client"
import { useState, useEffect } from "react";
interface IComment {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  status?: string; 
}

const Comments = ({ currentComments }: { currentComments: any[] }) => {
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

  const handleApprove = (id: number, type: string, comment: any, item: any) => {
    comment.status = 'approved';
    setComments(prevComments =>
      prevComments.map(i => 
        i.id === item.id
          ? {
              ...i,
              comments: i.comments.map((c:IComment) =>
                c.id === comment.id ? { ...c, status: 'approved' } : c
              ),
            }
          : i
      )
    );
    console.log(`Approved ${type} comment with ID: ${id}`, {
      title: item.title || "No Title", 
      comment: comment.description,
      status: comment.status,
      createdAt: comment.createdAt,
      name: comment.name,
    });
  };

  const handleReject = (id: number, type: string, comment: any) => {
    comment.status = 'rejected';
    setComments(prevComments =>
      prevComments.map(i => 
        i.comments.map((c:IComment) =>
          c.id === comment.id ? { ...c, status: 'rejected' } : c
        )
      )
    );

    console.log(`Rejected ${type} comment with ID: ${id}`);
  };

  // Function to filter comments based on search term and whether comments exist
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
                            className="text-white bg-green-600 px-4 py-1 rounded"
                            onClick={() => handleApprove(comment.id, 'comment', comment, item)}  // Pass `item` here
                          >
                            Approve
                          </button>
                          <button
                            className="text-white bg-red-600 px-4 py-1 rounded"
                            onClick={() => handleReject(comment.id, 'comment', comment)}
                          >
                            Reject
                          </button>
                        </div>
                        {/* Display status */}
                        <div className="mt-2 text-sm text-gray-500">
                          Status: {comment.status}
                        </div>

                        {/* Only render replies if they exist */}
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
