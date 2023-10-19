export default function Spacer({ horizontalSpacing = 0,verticalSpacing = 0 }){

    const spacing = `mx-${horizontalSpacing} my-${verticalSpacing}`

    return(
        <>
            <div className={spacing} />
        </>
    )
}