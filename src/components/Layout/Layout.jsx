import s from "./Layout.module.css"

const Layout = (id , tittle, descr, urlBg, colorBg) => {
    return (
        <section className={s.root} id={this.props.id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>
                            {this.props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc}>
                        <p>
                            {this.props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )

};

        export default Layout;