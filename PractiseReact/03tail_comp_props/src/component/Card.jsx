import React from 'react'

const Card = ({username = 'Not declared', positioon = 'Not assigned'}) => {
    //console.log(props);
  return (
    <>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
            src="https://th.bing.com/th/id/OIP.BHTm-phxSRaWfuYJKwqjmgHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7" 
            alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
        <p className="text-lg font-medium text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde enim excepturi autem non mollitia maiores totam dolorum! Voluptatem molestiae sequi laudantium, pariatur quisquam consequuntur eius illum natus magnam totam nesciunt delectus mollitia saepe error necessitatibus eos ex, nemo fuga. Molestiae, tempora. Nesciunt aliquid voluptatem dolorum animi magnam quo velit laudantium?
        </p>
        </blockquote>
        <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
            {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
            {positioon}
        </div>
        </figcaption>
    </div>
    </figure>
     </>
  )
}

export default Card