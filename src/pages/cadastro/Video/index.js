import React , { useState }  from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroVideo () {
  const filmObj = {
    titulo: '',
    categoria: '',
    cor: '#000000',
    desricao: ''
  }
  //const [categorias, setCategorias] = useState([]);
  const [films, setFilms] = useState([]);
  const [values, setValues] = useState(filmObj);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
    return (
      <PageDefault>
        <h1>Cadastro de Video</h1> 
      <form  onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setFilms([
            ...films,
            values
          ]);
          
          setValues(filmObj)
      }}> 

        <FormField
          label="Titulo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        /> 

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textearea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>
      

      <ul>
        {films.map((films, indice) => {
          return (
            <li key={`${films}${indice}`}>
              {films.titulo}
          </li> 
          )
        })}
      </ul>


        <Link to="/cadastro/categoria" >
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;