
// import { blog } from "./data/blog"
// import { useState } from "react"


// export default function Faqs() {
//   let [id, set] = useState(blog[0].id)


//   let items = blog.map((v) => {
//     let itemsdetail = {
//       v,
//       id,
//       set
//     }

//     return (
//       <FaqItems itemsdetail={itemsdetail} key={ itemsdetail.v.id}/>
//     )
//   })
//   return (
//     <div>
//       <h1>FAQ </h1>
//       <div className='faqouter'>
//         {items}
//       </div>
//     </div>

//   )
// }

// function FaqItems({ itemsdetail }) {
//   let { v,
//     id,
//     set } = itemsdetail
//   return (
//     <div className="faqitems" key={ itemsdetail.v.id}>
//       <h1 onClick={()=>{
//         set(itemsdetail.v.id)
//       }}>{v.id}</h1>
//       <p className={id === itemsdetail.v.id ? 'activeans' : '' }>{itemsdetail.v.title}</p>             
//     </div >
//   )
// }