import Card from "../components/Card"

const Divider = (props: {
    className? : string;
}) => {
    return (
        <div className="flex w-full flex-col">
            <Card srcImage="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                  altTxt="Album"
                  title="Testing stuff"
                  info="Click the button to listen on Spotiwhy app."
                  btnTxt="Listen"
                  />
            <div className="divider"></div>
            <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
            <div className="divider"></div>
            <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
        </div>
    )
}

export default Divider