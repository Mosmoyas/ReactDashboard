import './Container.css'


const Container = (props) => {
    return (
        <>
            <div className='page '>{props.children}</div>
        </>
    )
}

export default Container