import "./Widget.css"

const Widget = (props) => {
    return (
        <>
            <div class=" bg-white rad-6 txt-c-mobile block-mobile p-10">
                {props.children}

            </div>
        </>
    )
}

export default Widget
