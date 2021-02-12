import s from "./Layout.module.css"

const Layout = ({ urlBg , colorBg, id , title, descr }) => {
    const StyleRoot = urlBg ? {backgroundImage: urlBg } : {backgroundColor: colorBg }
    return (
        <section className={s.root} style={StyleRoot}
                 >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {title} </h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        <p>
                            {descr}   </p>
                    </div>
                </article>
            </div>
        </section>
    )

};

        export default Layout;