import { FaBackward } from 'react-icons/fa'
export default function SectionHeading({section, goBackFunc}) {
    return(
        <div className="menu-section-title">
                <h3>{section}</h3>
                <FaBackward 
                color={'#8ED6A9'} 
                onClick={goBackFunc}
                style={{
                    borderStyle: 'solid', 
                    padding: '5px', 
                    borderRadius: '10px'
                }}
                />
        </div>
    )
}