import express from "express";
const app = express();
const port = 3000;
let count=9
app.use(express.json())
let arr=[
    {
    "id": 2,
    "description": "Sweet and savory sauces relishes spreads and seasonings",
    "name": "Condiments"
    },
    {
    "id": 1,
    "description": "Soft drinks coffees teas beers and ales",
    "name": "Beverages"
    },
    {
    "id": 3,
    "description": "Desserts candies and sweet breads",
    "name": "Confections"
    },
    {
    "id": 4,
    "description": "Cheeses",
    "name": "Dairy Products"
    },
    {
    "id": 5,
    "description": "Breads crackers pasta and cereal",
    "name": "Grains/Cereals"
    },
    {
    "id": 6,
    "description": "Prepared meats",
    "name": "Meat/Poultry"
    },
    {
    "id": 7,
    "description": "Dried fruit and bean curd",
    "name": "Produce"
    },
    {
    "id": 8,
    "description": "Seaweed and fish",
    "name": "Seafood"
    }
    ]
app.get("/", (req, res) => {
  res.send(arr);
});
app.get("/*", (req, res) => {
    res.status(404).json({message:"Aqa burasi neresi aq"})
  });
app.get("/:id", (req, res) => {
    const id=req.params.id
    const IDdata=arr.find(x=>x.id==+id)
   
    if(IDdata){
        res.send(IDdata);
        res.status(200).json({message:"User tapildi"})
    }
    else{
        res.status(404).json({message:"User tapilmadi"})
    }
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.post("/", function (req, res) {
    const newarr={
        id:count++,
        description:req.body.description,
        name:req.body.name
    }
    arr.push(newarr)
    res.send(arr)
});

app.put("/:id", function (req, res) {
const id=req.params.id
arr=arr.filter(x=>x.id!== +id)
const newObj={
    id:+id,
    description:req.body.description,
    name:req.body.name
}
arr.push(newObj)
arr.sort((a,b)=>a.id-b.id)
res.send(arr)
});
app.delete("/:id", function (req, res) {
    const id=req.params.id
    const Deldata=arr.filter(x=>x.id!== +id)
    res.send(Deldata);
});
