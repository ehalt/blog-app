import React from 'react'
import editIcon from '../img/edit.png'
import deleteIcon from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className="user">
          <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
          <div className="info">
            <span>john</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`} >
              <img className='editicon' src={editIcon} alt="" />
            </Link>
            <Link to={`/write?delete=`}>
              <img className='editicon del' src={deleteIcon} alt="" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nesciunt incidunt maxime atque recusandae repellat odit dolore a laboriosam id ex deserunt nostrum pariatur, ad temporibus, officia nihil minima odio quidem vitae distinctio, et numquam totam tempora? Labore dicta, illum libero est odio expedita corporis omnis quo, sit ab saepe dolores possimus harum autem totam quas quae tempore alias ad fugit asperiores nemo, placeat ea? Laboriosam maxime esse voluptatibus minima, dolore ratione velit quaerat sunt consequuntur! Modi dolorum voluptate fuga placeat vel quam perspiciatis officiis, quos tenetur, corporis, eum reprehenderit velit. Velit reprehenderit voluptatibus itaque minus id laboriosam cum dolorem, exercitationem impedit ea eos, veritatis optio? Nobis provident vel corporis aliquam dolorem alias et dolor enim qui quidem, neque illo rem dolore in omnis temporibus excepturi eius voluptate. Esse similique soluta aliquam iure eaque ullam distinctio laboriosam perspiciatis animi, vel molestias unde sint. Minima ipsum repellat iusto et quos corrupti quae quam ducimus aliquid totam porro quia laudantium dolor placeat iure voluptas ex fugiat molestiae quis molestias odio dolore labore, harum quas. Numquam consectetur iure quidem corrupti nemo similique earum amet! Nulla voluptatum harum unde, fugiat veritatis repellendus sint dolores animi quos sequi ducimus dolorum adipisci iure quidem fuga? Nobis asperiores perspiciatis corrupti incidunt, esse error quas. A quisquam assumenda tempore voluptate tenetur quasi distinctio sunt cupiditate consequatur repellat enim ducimus consectetur ratione, omnis, quam velit hic animi! Accusamus cupiditate nisi rem dignissimos doloribus veniam, iste amet ut sint vitae aperiam et quod. Dolore praesentium officiis, quo asperiores autem sunt voluptatibus esse in tenetur veritatis delectus laborum, ipsum voluptatem unde deleniti corporis qui modi temporibus, cum reiciendis quis! Eos autem et error sit sequi? Quis culpa nulla veritatis sit asperiores at ab, neque rerum, minima amet voluptatum. Eaque necessitatibus, explicabo corporis itaque, expedita dolorem ducimus dolorum molestias nemo nam officiis dolore. Dolores sed architecto deserunt nulla, recusandae consequatur consectetur soluta tempora, qui at autem obcaecati eaque nihil exercitationem sint perferendis reiciendis eos quia saepe beatae rerum animi id? Incidunt dolorem explicabo vel, similique maxime ad fugiat repellendus repellat ipsum. Ut quod deleniti sunt blanditiis ipsa repellat maiores voluptas deserunt cumque pariatur, qui praesentium et expedita quos rem voluptatum quasi veritatis, labore sapiente quidem placeat? Praesentium veritatis iste eaque explicabo officia. Illum saepe cumque voluptatum repellat sed repudiandae nemo consequatur veniam fugiat dignissimos, ipsum corrupti, totam natus voluptas commodi libero fuga eos enim. Debitis optio numquam ducimus nam enim? Commodi doloremque repellat ipsam fugiat eaque rem dolore at nemo illo, harum culpa nisi, illum neque aspernatur possimus sint vero et. Odio molestiae incidunt eum praesentium voluptas necessitatibus perferendis, repellendus laborum minima atque explicabo! Ducimus excepturi tenetur quo. Quis magnam soluta nostrum repellendus officiis, deleniti possimus, animi culpa recusandae excepturi, architecto blanditiis maxime nam. Tempore aperiam vel cumque neque assumenda corrupti non delectus. Dolorem fugiat blanditiis aut quisquam veritatis architecto deserunt temporibus. Dolorum molestias eum aut ab quam commodi voluptas vel quas hic id laborum blanditiis deserunt, neque tempore porro nulla, dolor non maiores culpa necessitatibus ea quasi eos. Aliquid, molestias ullam?</p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default Single
