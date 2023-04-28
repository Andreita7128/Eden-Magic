export var AttributeComment;
(function (AttributeComment) {
    AttributeComment["pictureProfile"] = "pictureProfile";
    AttributeComment["userName"] = "userName";
    AttributeComment["comment"] = "comment";
    AttributeComment["likes"] = "likes";
})(AttributeComment || (AttributeComment = {}));
class Comment extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        const attrs = {
            pictureProfile: null,
            userName: null,
            comment: null,
            likes: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/Comments/comment.css">
    <article id="comment">
            <p id="comment_user"> ${this.userName}</p>
            <section id="comment_body">
                <img id="comment_img" src=" ${this.pictureProfile} ">
                <div id="comment_text">
                    <p id="comment_comment"> ${this.comment} </p>
                </div>
            </section>
            <section id="comment_reactions">
                <div id="comment_likes">
                    <i class="bi bi-heart"></i>
                    <p id="comment_number"> ${this.likes}</p>
                </div>
                <i class="bi bi-three-dots"></i>
            </section>
        </article>
    

    `
    }

    renderEmpty() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../../public/Components/Comments/comment.css">
        <article id="comment">
            <p id="comment_noComment"> ¡Parece que está un poco vacío por acá, sé el primero en comentar! </p>
            </article>
    `
    }
}

customElements.define('comments-product', Comment)
export default Comment