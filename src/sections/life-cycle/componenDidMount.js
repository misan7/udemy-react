import React, { Component } from "react";

class EjemploComponentDidMount extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { scroll: 0 };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.addEventListener("scroll", () => {
      this.setState({ scroll: window.scrollY });
    });
  }

  render() {
    console.log("render");
    return <div>
        <h1>HAHA</h1>
        <p>El scroll es: {this.state.scroll}</p>
        <p>Analyst Personal Loan Account Vatu</p>
        <p>
          Earum maxime laboriosam itaque ut nihil. Impedit recusandae
          nostrum voluptatem beatae asperiores accusamus distinctio sit
          nihil. Dignissimos qui veritatis in unde neque eaque reiciendis
          sed. Corrupti eos et quis quos porro hic ex est. Quidem dolorum
          voluptas quaerat non asperiores ipsam. Est voluptas et quaerat
          quasi omnis quae non. Pariatur maxime et reiciendis qui facere
          sint delectus perferendis quas. Rem tempora vel animi odit tempora
          voluptas aperiam. Modi perspiciatis natus itaque omnis atque
          labore explicabo et. Libero laboriosam harum aut ut aut. Et vel id
          iste molestias quam minus quis. Quibusdam vero sunt fugiat quidem
          pariatur cum. Corporis quidem cupiditate. Repudiandae ea dicta et
          enim.
        </p>
        <p>
          Harum repellat consequatur. Sit ea inventore blanditiis sint aut
          accusantium. Aspernatur earum doloribus voluptas vel non aliquid
          voluptatem aperiam. Perferendis velit sapiente necessitatibus
          unde.
        </p>
        <p>
          Laudantium aut error non adipisci velit. Maxime dolore aliquid
          expedita sapiente officia nemo repudiandae quo omnis. Delectus
          atque ipsum amet. Facilis sit cum ab illum autem doloribus id
          adipisci nesciunt. Sint alias ut nihil facilis occaecati ratione
          dolores magni suscipit. Consequuntur aut quisquam. Error autem aut
          vero expedita non a adipisci. Qui excepturi alias dolores quam
          dicta. Provident quia iste esse fugiat omnis. Sunt quis
          reiciendis. Facilis occaecati perspiciatis quia nisi ipsam nihil
          aut ducimus. Quaerat culpa cupiditate magni a ab. Voluptatibus
          minus repellendus reprehenderit maxime ab.
        </p>

        <h1>HAHA</h1>
        <p>Analyst Personal Loan Account Vatu</p>
        <p>El scroll es: {this.state.scroll}</p>

        <p>
          Earum maxime laboriosam itaque ut nihil. Impedit recusandae
          nostrum voluptatem beatae asperiores accusamus distinctio sit
          nihil. Dignissimos qui veritatis in unde neque eaque reiciendis
          sed. Corrupti eos et quis quos porro hic ex est. Quidem dolorum
          voluptas quaerat non asperiores ipsam. Est voluptas et quaerat
          quasi omnis quae non. Pariatur maxime et reiciendis qui facere
          sint delectus perferendis quas. Rem tempora vel animi odit tempora
          voluptas aperiam. Modi perspiciatis natus itaque omnis atque
          labore explicabo et. Libero laboriosam harum aut ut aut. Et vel id
          iste molestias quam minus quis. Quibusdam vero sunt fugiat quidem
          pariatur cum. Corporis quidem cupiditate. Repudiandae ea dicta et
          enim.
        </p>
        <p>
          Harum repellat consequatur. Sit ea inventore blanditiis sint aut
          accusantium. Aspernatur earum doloribus voluptas vel non aliquid
          voluptatem aperiam. Perferendis velit sapiente necessitatibus
          unde.
        </p>
        <p>
          Laudantium aut error non adipisci velit. Maxime dolore aliquid
          expedita sapiente officia nemo repudiandae quo omnis. Delectus
          atque ipsum amet. Facilis sit cum ab illum autem doloribus id
          adipisci nesciunt. Sint alias ut nihil facilis occaecati ratione
          dolores magni suscipit. Consequuntur aut quisquam. Error autem aut
          vero expedita non a adipisci. Qui excepturi alias dolores quam
          dicta. Provident quia iste esse fugiat omnis. Sunt quis
          reiciendis. Facilis occaecati perspiciatis quia nisi ipsam nihil
          aut ducimus. Quaerat culpa cupiditate magni a ab. Voluptatibus
          minus repellendus reprehenderit maxime ab.
        </p>

        <h1>HAHA</h1>
        <p>Analyst Personal Loan Account Vatu</p>
        <p>El scroll es: {this.state.scroll}</p>

        <p>
          Earum maxime laboriosam itaque ut nihil. Impedit recusandae
          nostrum voluptatem beatae asperiores accusamus distinctio sit
          nihil. Dignissimos qui veritatis in unde neque eaque reiciendis
          sed. Corrupti eos et quis quos porro hic ex est. Quidem dolorum
          voluptas quaerat non asperiores ipsam. Est voluptas et quaerat
          quasi omnis quae non. Pariatur maxime et reiciendis qui facere
          sint delectus perferendis quas. Rem tempora vel animi odit tempora
          voluptas aperiam. Modi perspiciatis natus itaque omnis atque
          labore explicabo et. Libero laboriosam harum aut ut aut. Et vel id
          iste molestias quam minus quis. Quibusdam vero sunt fugiat quidem
          pariatur cum. Corporis quidem cupiditate. Repudiandae ea dicta et
          enim.
        </p>
        <p>
          Harum repellat consequatur. Sit ea inventore blanditiis sint aut
          accusantium. Aspernatur earum doloribus voluptas vel non aliquid
          voluptatem aperiam. Perferendis velit sapiente necessitatibus
          unde.
        </p>
        <p>
          Laudantium aut error non adipisci velit. Maxime dolore aliquid
          expedita sapiente officia nemo repudiandae quo omnis. Delectus
          atque ipsum amet. Facilis sit cum ab illum autem doloribus id
          adipisci nesciunt. Sint alias ut nihil facilis occaecati ratione
          dolores magni suscipit. Consequuntur aut quisquam. Error autem aut
          vero expedita non a adipisci. Qui excepturi alias dolores quam
          dicta. Provident quia iste esse fugiat omnis. Sunt quis
          reiciendis. Facilis occaecati perspiciatis quia nisi ipsam nihil
          aut ducimus. Quaerat culpa cupiditate magni a ab. Voluptatibus
          minus repellendus reprehenderit maxime ab.
        </p>

        <h1>HAHA</h1>
        <p>Analyst Personal Loan Account Vatu</p>
        <p>
          Earum maxime laboriosam itaque ut nihil. Impedit recusandae
          nostrum voluptatem beatae asperiores accusamus distinctio sit
          nihil. Dignissimos qui veritatis in unde neque eaque reiciendis
          sed. Corrupti eos et quis quos porro hic ex est. Quidem dolorum
          voluptas quaerat non asperiores ipsam. Est voluptas et quaerat
          quasi omnis quae non. Pariatur maxime et reiciendis qui facere
          sint delectus perferendis quas. Rem tempora vel animi odit tempora
          voluptas aperiam. Modi perspiciatis natus itaque omnis atque
          labore explicabo et. Libero laboriosam harum aut ut aut. Et vel id
          iste molestias quam minus quis. Quibusdam vero sunt fugiat quidem
          pariatur cum. Corporis quidem cupiditate. Repudiandae ea dicta et
          enim.
        </p>
        <p>
          Harum repellat consequatur. Sit ea inventore blanditiis sint aut
          accusantium. Aspernatur earum doloribus voluptas vel non aliquid
          voluptatem aperiam. Perferendis velit sapiente necessitatibus
          unde.
        </p>
        <p>
          Laudantium aut error non adipisci velit. Maxime dolore aliquid
          expedita sapiente officia nemo repudiandae quo omnis. Delectus
          atque ipsum amet. Facilis sit cum ab illum autem doloribus id
          adipisci nesciunt. Sint alias ut nihil facilis occaecati ratione
          dolores magni suscipit. Consequuntur aut quisquam. Error autem aut
          vero expedita non a adipisci. Qui excepturi alias dolores quam
          dicta. Provident quia iste esse fugiat omnis. Sunt quis
          reiciendis. Facilis occaecati perspiciatis quia nisi ipsam nihil
          aut ducimus. Quaerat culpa cupiditate magni a ab. Voluptatibus
          minus repellendus reprehenderit maxime ab.
        </p>
      </div>;
  }
}

export default EjemploComponentDidMount;
