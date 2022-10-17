import "./Content.css"

const Content = (props) => {
    return (
        <>
            <div class="content w-full .overflow-h">
                {props.children}
                
            </div>
        </>
    )
}

export default Content