import {useState} from 'react';

function Comments () {
  const [commentArray, setCommentArray] = useState ([]);
  const [commentText, setCommentText] = useState ('');
  const [commentLoopArray, setCommentLoopArray] = useState([]);
  console.log(commentLoopArray, 'commentLoopArray');
  const fetchComments = async () => {
    const response = await fetch ('http://localhost:3000/api/comments');
    const data = await response.json ();
    console.log (data, 'datadata');
    setCommentArray (data.comments);
    setCommentLoopArray(data.comments);
  };

  const submitCommentHandler = async () => {
    const response = await fetch ('/api/comments', {
      method: 'POST',
      body: JSON.stringify ({commentText}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json ();
    console.log (data);
    fetchComments ();
    alert ('added successfully');
  };

  const deleteComment = async commentId => {
    const response = await fetch (`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    const data = await response.json ();
    console.log (data);
    fetchComments ();
  };

  const commentChange = (value, index) => {
    const newArray = [...commentLoopArray];
    const obj = newArray[index];
    const newObj = {...obj, title: value};
    newArray[index] = newObj;
    setCommentLoopArray(newArray);
  };

  const updateHandler = () => {
    setCommentArray (commentLoopArray);
  }

  return (
    <div>
      <input
        type="text"
        value={commentText}
        onChange={e => setCommentText (e.target.value)}
      />
      <button onClick={submitCommentHandler}>Submit Comment</button><br /><br />
      <button onClick={fetchComments}>Load Comments</button>
      <br /><br /><h3>Comments List</h3><br />
      {commentArray.length
        ? commentArray.map ((item, index) => {
            return (
              <div>
                {item.id}
                {' '}
                {item.title}
                <br />
                {item.desc}
                <br /><br />
                <button onClick={() => deleteComment (item.id)}>
                  Delete Comment
                </button>
                <br />
                <input type="text" value={commentLoopArray[index].title} onChange={(e) => commentChange(e.target.value, index)} />
                <button onClick={updateHandler}>Update</button>
                <hr />
              </div>
            );
          })
        : 'No data'}
    </div>
  );
}

export default Comments;
