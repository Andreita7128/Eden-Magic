class Comment extends HTMLElement {
    constructor() {
        super()
}

connectedCallback() {
    this.render()
}

render() {
    this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/Comments/comment.css">
    <article id="comment">
            <p id="comment_user">User Name</p>
            <section id="comment_body">
                <img id="comment_img" src="/img/images comments/Ellipse 7.png" alt="">
                <div id="comment_text">
                    <p id="comment_comment">Escribe aquí tu texto</p>
                </div>
            </section>
            <section id="comment_reactions">
                <div id="comment_likes">
                    <i class="bi bi-heart"></i>
                    <p id="comment_number">140</p>
                </div>
                <i class="bi bi-three-dots"></i>
            </section>
        </article>
    

    `
}

}

customElements.define('comments-product', Comment)
export default Comment