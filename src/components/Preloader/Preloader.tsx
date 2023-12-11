import preloader from './spinner.svg'

export const Preloader = () => {
  return(
    <div className='preloader'>
        <img 
			src={preloader} 
			alt='preloader' 
			className='preloader__img'
		/>
    </div>
  )
}