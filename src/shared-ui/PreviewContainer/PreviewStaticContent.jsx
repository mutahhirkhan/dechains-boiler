import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import AuthorBio from '../AuthorBio/AuthorBio';

const PreviewStaticContent = () => {
    return (
        <>
            <div className="banner">
                <img src={require("./../../assets/img/job-banner.png")} alt="" width={"100%"} height={"70%"} />
            </div>
            <div className="time">June 21, 2021</div>
            <div className="content-wrapper">
                <div className="heading title"><h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, architecto?</h1></div>
                <div className="heading sub-title"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias recusandae commodi minima error sit voluptatem dolore. Repellendus nemo, suscipit tempora dolor cumque at aliquid ipsum non praesentium, autem natus libero quos. Blanditiis voluptas aspernatur rerum beatae ea corporis ex magni inventore neque impedit, nulla mollitia perferendis cum, culpa deserunt?</p></div>
                <br />
                <br />
                <div className="heading description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic earum commodi obcaecati laborum nostrum inventore non odio delectus neque ipsum explicabo suscipit, architecto recusandae. Distinctio deleniti minus, quasi corrupti totam voluptatem impedit fuga repellendus obcaecati ex expedita vero maxime omnis ab dolorem pariatur sit sunt deserunt recusandae. Placeat eligendi repellendus harum doloribus reiciendis commodi sapiente consequatur iure explicabo nostrum distinctio velit impedit architecto, adipisci ea. Voluptatum expedita doloremque inventore corporis necessitatibus corrupti doloribus consequatur ducimus temporibus sapiente architecto illum facere dicta tenetur quisquam nemo laborum possimus facilis maxime libero atque, quod quia. Placeat recusandae aperiam esse provident illum, doloremque ut dolorem debitis animi deserunt, et iste hic ad facilis. Tenetur harum reiciendis voluptates officiis sapiente saepe tempora voluptate inventore modi, expedita ut impedit alias ab magni nobis maiores corporis dicta beatae. Corporis excepturi iure voluptas similique, nihil, nesciunt eaque facere quasi, natus dicta commodi possimus sed asperiores saepe? Minus similique esse blanditiis repudiandae tempore impedit facilis adipisci? Temporibus reprehenderit maxime id quasi iusto, reiciendis voluptatum quod repudiandae, consequuntur, totam libero sed. Quisquam quia consectetur doloribus obcaecati odio cumque veniam repellendus esse dolorum quos repudiandae illo voluptatum, cupiditate dolor accusantium ducimus excepturi, sapiente nisi? Odio animi recusandae qui veniam sed! Esse mollitia eos corrupti sed provident illum incidunt, sapiente nulla quo a. Quas quaerat accusantium dolore fugit facere, dolorum obcaecati inventore vel, esse perferendis fugiat possimus quam. Quia quae, aperiam architecto iure tempore pariatur deleniti, assumenda blanditiis sunt voluptatibus maxime ducimus deserunt officiis neque, magnam odit veritatis dicta? Excepturi non, beatae animi a vel molestias, deleniti eius odio magni adipisci consequatur eligendi voluptas, reprehenderit maxime harum doloremque perspiciatis dolorem! Officia ad sequi aperiam ducimus rem. Eveniet qui ratione quod quibusdam dolorem perferendis autem quisquam consequatur! Maxime unde veniam perferendis aperiam obcaecati? At quisquam nobis quidem adipisci nam sint, ut quo.</p>
                </div>
            </div>
            <div className="carousel">
                <ImageCarousel />
                <AuthorBio />
            </div>
        </>
    )
}

export default PreviewStaticContent
