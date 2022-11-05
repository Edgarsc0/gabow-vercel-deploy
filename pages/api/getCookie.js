function getCookie(req,res){
    const {Parameters} = req.cookies;
    console.log(Parameters);
    if(!Parameters){
        return res.status(404).json({
            status:"no token"
        });
    }else{
        console.log(Parameters);
        return res.status(200).json({
            status : 'tokenchido',
            cookie: Parameters
        })
    }
}
export default getCookie;