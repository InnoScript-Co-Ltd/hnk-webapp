import './style.css'

type btnProps = {
    onBtnClick: () => void,
    label: string,
    backgroundColor?: string,
    minWidth?: string, 
    arrow?: boolean,
    disabled?: boolean,
    className?: string
}

const ButtonComponent = (props: btnProps) => {
    const {onBtnClick, label, backgroundColor, minWidth, arrow, disabled} = props
  return (
    <button disabled={disabled} style={{backgroundColor: backgroundColor || '', minWidth: minWidth || ''}} onClick={onBtnClick} className="btn-style">
        <span className='button-label'>{label}</span>
        {
          arrow && (
            <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M16.9263 0L13.9592 0.501143C13.9592 2.83013 15.9778 5.86846 18.1466 7.61036H0.21875V10.3896H18.1454C15.9767 12.1315 13.958 15.1699 13.958 17.4989L16.9251 18C16.9251 14.6966 19.8797 10.3896 23.2188 10.3896V7.61036C19.8797 7.61036 16.9251 3.30343 16.9251 0L16.9263 0Z"
                fill="black"
            />
            </svg>
          )
        }
  </button>
  )
}

export default ButtonComponent