import { motion } from "framer-motion"
import { CUSINES } from "../constants"
const Expertise = () => {

const containerVariants={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transiton:{
         staggerChildren:0.8,  
        }

   }
}


const itemVariants={
    hidden:{opacity:0, y:40},
show:{
    opacity:1, 
    y:0, 
    transiton:{
        duration:1

    }
}
}
  return (
    <section id="expertise">
    <h2 className=" my-8 text-center text-3xl lg:text-4xl tracking-tighter">
        Our Expertise
    </h2>
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={containerVariants}
    className=" container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
            <motion.div
            key={index} className=" flex items-center border-b-4 border-dotted 
            border-neutral-700/40 py-2" variants={itemVariants}>
          <div className=" flex-shrink-0 pr-8 text-2xl ">{cusine.number}</div>
          <div className=" w-1/3 flex-shrink-0">
          <img src={cusine.image} alt={cusine.title} className=" h-auto rounded-3xl" /></div>
          <div className=" pl-8">
            <h3 className="  text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
            </h3>
            <p className=" mt-4 tracking-tighter text-lg">{cusine.description}</p>
          </div>
            </motion.div>
        )) }
    </motion.div>
</section>
  )
}

export default Expertise