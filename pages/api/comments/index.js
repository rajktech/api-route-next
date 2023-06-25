import { comments } from './../../../data/comments';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({comments});
    } else if (req.method === 'POST') {
        const comment = req.body.commentText;
        const newComment = {
            id: comments.length ? comments[comments.length-1].id + 1 : 1,
            title: comment,
            desc: comment
        }
        comments.push(newComment);
        res.status(201).json(newComment);
    }
}