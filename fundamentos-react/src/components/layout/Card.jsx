import './Card.css';

export default function Card({titulo, children, color}){

    const cardStyle = {
        backgroundColor: color || '#F00',
        borderColor: color || '#F00'
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="title">{titulo}</div>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}