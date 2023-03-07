import profileModel from "../models/profileModel.js";
import placementModel from "../models/placementModel.js";
import noticeModel from "../models/noticeModel.js";


export const createProfileCtrl = async (req, res) => {
  try {
    const profile = new profileModel(req.body);
    await profile.save();
    res.status(200).json({ message: "profile created success", success: true });
  } catch (error) {
    res.status(500).json({
      message: "profile creation failed",
      success: false,
      error: error.message,
    });
  }
};
export const getDrive=async(req,res)=>{
try{
  const drive=await placementModel.find({_id:req.params.id})
  res.status(200).json(drive)
}catch(error){
res.status(501).send(error)
}
};

export const getAllNotice=async(req,res)=>{
try{
  const notices=await noticeModel.find({})
  res.status(200).json(notices)
}catch(error){
res.status(501).send(error)
}
};

export const getAllDrives = async (req, res) => {
  try {
    const alldrives = await placementModel.find({});
    res.status(200).json(alldrives);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch all drives", error });
  }
};

export const getallplacedcompanies = async (req, res) => {
  try {
    const allcompanies = await profileModel.find(
      { userId: req.params.id },
      { placedData: 1 }
    );
    res.status(200).send(allcompanies);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch placed data" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const getprofile = await profileModel.find({ userId: req.params.id });
    res.status(200).json(getprofile);
  } catch (error) {
    res.status(501).json({ message: "failed to fetch placed data" });
  }
};
// module.exports={createProfileCtrl,getDrive,getAllDrives,getallplacedcompanies,getProfile,getAllNotice}