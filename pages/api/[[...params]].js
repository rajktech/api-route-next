export default function handler(req, res) {
    const params = req.query.params;
    console.log(params);
    console.log('test');
    res.status(200).json(params);
}