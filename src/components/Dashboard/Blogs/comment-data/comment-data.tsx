import { BlogTitles, CommentData, NestedCommentData } from 'data/data';
import React, { useState } from 'react';

const CommentsData = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredComments, setFilteredComments] = useState(CommentData); 

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
  
    const filtered = CommentData.filter((comment) => {
      const blogTitle = BlogTitles.find((blog) => blog.id === comment.blogId)?.title || '';
      return (
        blogTitle.toLowerCase().includes(searchValue) ||
        comment.createdAt.toLowerCase().includes(searchValue) || 
        comment.userName.toLowerCase().includes(searchValue) ||
        comment.comment.toLowerCase().includes(searchValue)
      );
    });
  
    setFilteredComments(filtered);
  };
  
  const handleApprove = (id: number, type: string) => {
    alert(`Approved ${type} comment with ID: ${id}`);
  };

  const handleReject = (id: number, type: string) => {
    alert(`Rejected ${type} comment with ID: ${id}`);
  };

  return (
    <>
     <div className="flex justify-between mb-4 items-center flex-wrap text-black dark:text-white">
        <input
          className="peer lg:p-3 p-2 block outline-none border dark:text-black rounded-md border-gray-200 dark:bg-boxdark dark:drop-shadow-none text-sm dark:focus:border-primary focus:border-dark focus:ring-dark-500 disabled:opacity-50 disabled:pointer-events-none"
          type="search"
          placeholder="Search Comments"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>


      <div className="p-6 bg-gray-100">
        {filteredComments.map((item) => {
          const blogTitle = BlogTitles.find((blog) => blog.id === item.blogId)?.title;

          return (
            <div key={item.id} className="bg-white p-4 mb-4 rounded shadow">
            
              {blogTitle && <h4 className="text-lg font-semibold mb-1">{blogTitle}</h4>}

              
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-lg font-bold">{item.userName}</h5>
                <span className="text-sm text-gray-500">
                  {item.createdAt ? new Date(item.createdAt).toLocaleString() : ''}
                </span>
              </div>
              <p className="text-gray-700">{item.comment}</p>


              <div className="flex gap-4 mt-2">
                <button
                  className="text-white bg-green-600 px-4 py-1 rounded"
                  onClick={() => handleApprove(item.id, 'parent')}
                >
                  Approve
                </button>
                <button
                  className="text-white bg-red-600 px-4 py-1 rounded"
                  onClick={() => handleReject(item.id, 'parent')}
                >
                  Reject
                </button>
              </div>

             
              {NestedCommentData.filter((nested) => nested.replyId === item.id).map(
                (nestedItem) => (
                  <div key={nestedItem.id} className="mt-4 pl-6 border-l-2">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="text-md font-bold">{nestedItem.userName}</h5>
                      <span className="text-sm text-gray-500">
                        {nestedItem.createdAt
                          ? new Date(nestedItem.createdAt).toLocaleString()
                          : ''}
                      </span>
                    </div>
                    <p className="text-gray-700">{nestedItem.comment}</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        className="text-white bg-green-600 px-4 py-1 rounded"
                        onClick={() => handleApprove(nestedItem.id, 'nested')}
                      >
                        Approve
                      </button>
                      <button
                        className="text-white bg-red-600 px-4 py-1 rounded"
                        onClick={() => handleReject(nestedItem.id, 'nested')}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CommentsData;
