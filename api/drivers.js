import fs from "fs";
import path from "path";

const DB = path.join(process.cwd(),"db","drivers.json");

function read(){ return JSON.parse(fs.readFileSync(DB)); }
function write(d){ fs.writeFileSync(DB,JSON.stringify(d,null,2)); }

export default function handler(req,res){
  const db = read();

  if(req.method !== "POST")
    return res.status(405).end();

  const { action, name, phone, driverId } = req.body;

  if(action==="register"){
    const id = "DRV-"+Date.now();
    db.drivers.push({
      driverId:id,
      name,
      phone,
      status:"active",
      rating:5,
      deliveries:0
    });
    write(db);
    return res.json({ success:true, driverId:id });
  }

  if(action==="list"){
    return res.json(db.drivers.filter(d=>d.status==="active"));
  }

  if(action==="block"){
    const d = db.drivers.find(x=>x.driverId===driverId);
    if(d){ d.status="blocked"; write(db); }
    return res.json({ success:true });
  }

  res.status(400).end();
}
