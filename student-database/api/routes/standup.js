const Standup=require('../../models/standup.js')

module.exports=function (router){
    router.get('/standup',function(req,res){
        // res.send("hello");
        Standup.find({},(err,standup)=>{
            if(err){
                res.json({success:false,message:err});
            }
            else{
                if(!standup){
                    res.json({success:false,message:'No standup found'});
                }
                else{
                    res.json({success:true,standup:standup});
                }
            }
        })
    })
    router.post('/standup',function(req,res){
        let note=new Standup(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
    router.put('/updateStandup',(req,res)=>{
        if(!req.body._id){
            res.json({success:false,message:'no standup id provided'});
        }
        else{
            Standup.findOne({_id:req.body._id},(err,standup))
        }
        }

    })
}
