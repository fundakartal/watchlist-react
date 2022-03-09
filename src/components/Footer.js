import {AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="hidden md:flex items-center gap-x-10 h-16 justify-center bg-violet-200 text-violet-900 dark:bg-gray-900 dark:text-violet-200
    ">
        <a href='https://github.com/fundakartal'>
            <AiFillGithub size='28' />
          </a>
          <a href='https://twitter.com/fundakartaI'>
            <AiOutlineTwitter size='28' />
          </a>
          <a href='mailto:kartalfunda01@gmail.com'>
            <AiOutlineMail size='28' />
          </a>
    </div>
  )
}
export default Footer