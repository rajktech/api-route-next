import { comments } from './../../../data/comments';

export default function handler(req, res) {
    const {commentId} = req.query;
    if (req.method === 'GET') {
        console.log(req.method, 'req.method');
        const comment = comments.find(cmt => cmt.id === parseInt(commentId));
        res.status(200).json(comment);
    } else if (req.method === 'DELETE') {
        const deletedCommentIndex = comments.findIndex(cmt => cmt.id === parseInt(commentId));
        comments.splice(deletedCommentIndex, 1);
        res.status(200).json(comments);
    }
}