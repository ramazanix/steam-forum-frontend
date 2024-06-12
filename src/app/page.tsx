"use client";

import { observer } from "mobx-react";
import { useStore } from "@/hooks/useStore";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import Cookies from "js-cookie";

const Home = observer(() => {
  const {
    userStore: { updateStore },
  } = useStore();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      updateStore(accessToken!);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod! Ea
        dolore cupiditate recusandae. Laudantium libero sequi ea veritatis
        officia atque sed asperiores voluptas eveniet. Architecto accusantium
        veniam fuga perferendis? Similique sint voluptates voluptatem sequi
        possimus blanditiis id exercitationem doloribus nisi porro ut quas, illo
        nesciunt ipsam quod ab dolores neque officia quo modi consectetur autem
        dolorum nihil. Ut, voluptatibus. Odit laboriosam voluptates, reiciendis
        magnam atque quisquam excepturi officia ea similique consequuntur! Nemo,
        eligendi delectus dolorum obcaecati dolorem quasi dolor saepe
        repellendus consequatur consequuntur fugiat pariatur asperiores
        aspernatur laboriosam ad. Et blanditiis fugit facere totam dolorum,
        quidem voluptates ipsam incidunt nihil vitae dignissimos culpa aliquid
        soluta quos ipsa, aliquam molestiae vero reiciendis libero! Accusamus
        necessitatibus alias cum iusto voluptate consectetur? Laudantium
        impedit, animi repudiandae, temporibus eos quae dolorem nisi accusamus
        ad quaerat odio odit ratione cumque beatae doloribus unde at. Sed ipsam
        libero consequatur nemo? Vel expedita ipsa corrupti veritatis.
        Architecto quas ratione, magnam eos placeat aliquam adipisci eveniet
        consectetur, dolores iste sunt. Voluptatibus enim culpa suscipit quaerat
        libero doloribus a tenetur eius, minus officiis ea quod facilis rerum
        odit. Quisquam molestiae harum, suscipit quod quia ducimus possimus
        sequi cumque vitae quidem mollitia minima labore nihil aperiam rem
        laudantium sit molestias eius odit maxime accusantium consectetur
        officiis! Reprehenderit, esse neque? Vitae et at, voluptates soluta hic
        rerum asperiores iste obcaecati dolorem officia corrupti qui consectetur
        quam aperiam dolore impedit architecto. Fugiat, eum? Nulla debitis
        sequi, tempora nam cupiditate quas quaerat. Ad praesentium ipsum
        blanditiis ducimus hic impedit consequuntur aperiam obcaecati aliquam
        exercitationem quasi illo totam, eligendi at velit voluptas nesciunt
        numquam perspiciatis quia. Maxime odio, reprehenderit incidunt nobis
        voluptatem deserunt? Repellendus reprehenderit soluta omnis voluptas,
        ea, suscipit dolorum beatae saepe vero nemo illo molestiae maiores
        provident iusto. Alias esse earum minus, tenetur debitis culpa commodi,
        laboriosam blanditiis aliquam necessitatibus maxime. Saepe deserunt
        aliquid explicabo maxime ipsum sapiente, consequuntur vero eius ipsa
        quas placeat nisi, illo voluptatem vel sed ut harum dolorem amet
        perspiciatis dolorum! Illo dicta totam culpa? Obcaecati, ea? Aut minus
        animi, quidem qui, obcaecati atque tempore omnis nesciunt deserunt nulla
        pariatur! Eum, repudiandae ab accusantium nobis quasi aut dolorum harum
        deserunt asperiores libero. Deserunt, consectetur! Tempore, animi nulla.
        Perspiciatis fugit harum debitis repellendus autem distinctio velit
        obcaecati id cumque ipsa soluta inventore, quas at voluptate sit sequi
        asperiores. Fugiat quod iste dolore fugit nisi eligendi ex molestiae
        vitae. Dolores autem quis minima voluptatibus illo amet! Hic quod enim
        reprehenderit optio libero consequuntur architecto illum dolorem, et ut
        laboriosam minima. Nam, optio eaque non amet fuga laborum magni unde!
        Voluptates sequi, possimus earum officia dolor, distinctio quasi
        accusantium dolores at laborum facere ad qui laudantium quia, fugit hic
        ullam quidem. Animi incidunt corrupti delectus illum voluptas dolore
        facere eos. Aliquam dolore rem eaque consectetur, sint cumque cum
        perspiciatis tempora assumenda amet molestiae neque quod, est illum qui,
        architecto accusantium ut odit? Itaque natus omnis officiis numquam,
        accusamus ut aliquid? Quibusdam, molestiae iure voluptatem ipsa enim aut
        debitis perferendis voluptatibus officiis maiores, doloribus ipsam
        reprehenderit possimus, ab repellendus quaerat. Quos quia temporibus,
        mollitia ratione eligendi asperiores voluptates voluptas commodi iure.
        Cumque tempore laborum maxime earum reprehenderit rerum nam, magnam eos
        expedita, nobis cum aperiam possimus ducimus magni provident illum
        quidem. In excepturi repellat id, vero ea doloribus hic perspiciatis
        delectus? Sint dignissimos impedit obcaecati eligendi nobis excepturi
        amet commodi velit incidunt! Voluptate quos itaque explicabo perferendis
        pariatur odio aspernatur provident. Suscipit delectus ratione odit quas,
        dolorem nesciunt modi explicabo aliquid! Reprehenderit voluptate quae
        quas, ullam accusantium recusandae, totam ducimus illum natus cupiditate
        harum dolores sit adipisci laudantium! Magnam neque at quos eligendi
        tempore in nam ad aspernatur, velit, labore commodi. At, libero
        laudantium eveniet veniam placeat quibusdam minus minima aperiam debitis
        inventore corrupti, consectetur excepturi ipsa ullam ducimus optio
        adipisci cumque nostrum delectus! Debitis earum animi culpa molestiae
        laborum maxime. Ipsum id dignissimos quod totam, quo perspiciatis culpa,
        earum nam commodi, repudiandae exercitationem doloremque dolorem tenetur
        quibusdam recusandae sint impedit illo hic accusantium neque sapiente
        corrupti? Error quas eaque maxime. Itaque alias autem cum provident
        exercitationem officiis! Odit ipsum, dolorum a consequuntur, nobis amet
        unde asperiores vero nisi saepe laudantium illum porro facilis! Minima
        dolorem ut voluptas et ab autem? Dolore nobis qui quia distinctio, sunt
        nam ut suscipit quos eveniet est. Iure dolorem fugit hic quas
        repudiandae rerum eveniet ipsum aliquid, aspernatur sapiente eum quis
        amet atque pariatur? Excepturi. Quia exercitationem corrupti veniam
        illum accusantium nam distinctio modi quae repellat maiores ad magni
        repudiandae, minus nobis reprehenderit quidem eius! Illo officia
        voluptate consectetur, voluptas ducimus iure dicta omnis necessitatibus.
        Et, deserunt. Eveniet excepturi harum numquam at consectetur in ex
        eaque, vero veniam ab vitae recusandae dolor. Hic fugit accusamus,
        tenetur vel inventore dicta minima? Soluta doloremque earum iure
        possimus? Ab, nisi. In amet est officiis voluptas beatae a qui,
        adipisci, dolor aperiam natus repellendus! Distinctio modi atque eaque
        quam, repellat deleniti provident iste accusamus porro saepe pariatur,
        ipsa eveniet? Repellendus, autem et! Excepturi, ratione necessitatibus.
        Accusantium iste, hic voluptates delectus, doloribus quasi distinctio
        libero ipsum labore sit necessitatibus? Vel eius ullam totam cupiditate
        a id distinctio officiis optio obcaecati. Vitae, expedita. Natus
        distinctio, inventore cum corporis nemo id aliquid maiores consectetur
        suscipit eos ut ipsa odit quos. Vel nemo veritatis consequatur accusamus
        labore libero corporis neque similique aperiam numquam! Laboriosam
        suscipit vitae facere sunt excepturi officia consequuntur eos! Sequi
        placeat beatae voluptatum quae asperiores labore fugit soluta, aperiam
        doloribus ipsam consequuntur nemo praesentium repellat temporibus iure
        maxime distinctio earum. Aperiam dolores iure debitis adipisci sunt
        dicta hic facere delectus ullam consequatur. Beatae, officia iure,
        veniam fuga ad repellendus nesciunt id dolor nostrum nemo temporibus
        harum non molestiae autem eligendi! Possimus aut deleniti iusto autem
        iste numquam? Voluptatibus, ipsum itaque sint aperiam sit ratione
        dolorem, iste magni reiciendis expedita non quia nemo dignissimos
        consectetur dolores, praesentium eveniet assumenda nobis cumque? Quasi
        doloremque veniam voluptatibus natus hic consectetur reprehenderit
        perferendis veritatis, itaque labore deleniti atque ab eveniet explicabo
        beatae illo aliquam in voluptatem quo. Sit soluta magni animi voluptatem
        odit hic? Fuga distinctio dicta esse culpa obcaecati est doloremque,
        ipsam explicabo nobis beatae mollitia et consectetur repellat
        reprehenderit eligendi officiis, amet, assumenda adipisci? Sapiente,
        illum iure repellat exercitationem eos recusandae necessitatibus.
        Adipisci, fugit reprehenderit. Deleniti dolorum quae recusandae unde
        quis, cupiditate nobis. Earum numquam fuga commodi. Doloribus vitae quos
        esse delectus! Illum quam ad exercitationem nostrum labore saepe quod
        unde aliquam. Esse veniam harum expedita dolor impedit! Voluptatem error
        atque cumque qui inventore accusamus commodi placeat ipsa, provident
        dolorem dicta quod non totam reprehenderit odio nihil amet repudiandae
        tempora repellat eaque. Illum quos officiis earum iusto est aperiam
        maxime debitis veritatis dolorum. Commodi, ut! Dolor ipsam explicabo
        facere veniam est possimus error debitis! Aliquid quos temporibus
        quaerat necessitatibus aut, voluptate reprehenderit. Porro, dolore
        quaerat optio omnis architecto vel explicabo voluptas, culpa quis
        reiciendis at exercitationem temporibus illum perspiciatis? Consectetur
        fugit eligendi, facere iure ducimus exercitationem repellendus possimus
        dolor, deserunt illo porro! Fugit quod a minima dolorum, eius totam
        doloribus laudantium consequuntur necessitatibus? Quo molestiae illo
        voluptates quidem commodi. Ea reiciendis, quia similique architecto
        inventore accusantium hic officia, iste obcaecati, cupiditate culpa!
        Voluptatem est dolorum id corrupti dicta quasi officiis nostrum aut
        totam odit, itaque temporibus tenetur fugiat tempora! Modi ipsum libero
        et, cumque neque vero voluptate provident hic ratione sit quod?
        Repellendus, expedita cum! Tenetur officiis omnis cum iusto deserunt
        ipsum repellat reiciendis odio nemo perspiciatis, dolorem dolorum
        aspernatur reprehenderit dolore impedit facere odit eligendi,
        repudiandae similique hic magni, inventore voluptatum! Veritatis enim
        repellat voluptate placeat eligendi impedit maiores id commodi, illo
        odit sequi, neque molestiae sit possimus adipisci! Quidem ea eius
        suscipit repellendus excepturi accusantium maiores magnam harum vel
        voluptate. Harum asperiores doloribus error earum? Reprehenderit quia
        nam ut recusandae provident quas, non optio ipsum illum! Dolores harum
        expedita nostrum, beatae impedit exercitationem inventore numquam ipsam.
        Excepturi nesciunt saepe minus! Tenetur praesentium iure culpa eligendi
        impedit quisquam nihil? Praesentium, ratione at rem alias, explicabo
        reiciendis quaerat nisi beatae architecto esse ducimus quisquam!
        Accusantium nulla id ullam, nemo quo alias odit? Dicta laborum ut minima
        error, qui veniam ullam nobis autem aut incidunt quod nulla cum. Eos,
        dolorum deserunt eveniet atque consectetur adipisci reiciendis
        voluptatibus deleniti minus vel, a cumque veniam. Sequi fuga totam,
        voluptatibus minima quibusdam veritatis et. Quisquam fugiat doloremque
        aliquid impedit facere atque nobis ut illum? Ullam vero aut sit
        distinctio tempora veniam, voluptas odio aperiam beatae cum! Explicabo,
        quia mollitia itaque nihil vel blanditiis iste numquam odit quae iusto
        tempore laudantium, ut ipsa nam reprehenderit nulla sed minima
        voluptatem dignissimos consequatur! Voluptatum ea quos recusandae eos.
        Voluptatem. Facere minus voluptatum voluptatibus iste quia, omnis
        similique! Quo commodi laborum numquam, quaerat dignissimos iure
        cupiditate magnam, fugit eius error optio rem placeat et, totam aut
        nulla itaque repellat. Ea? Accusantium corporis eveniet velit aperiam,
        facere iusto iure ducimus! Debitis asperiores aut dolorum vero illo, quo
        et hic commodi deserunt eos perspiciatis aliquid suscipit iste officiis?
        Illo earum laudantium veniam. Commodi rerum alias sunt tempora sapiente
        temporibus error, itaque illum blanditiis id, harum nemo ab dolorem ea
        dolores architecto minus mollitia esse veniam modi excepturi laborum
        earum? Tempora, fugit molestias?
      </main>
    </>
  );
});

export default Home;
