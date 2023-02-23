import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <>
      <form className="form-grup" action="/action_page.php">
        <div class="mb-3 mt-3">
          <label for="text" class="form-label">
            Nome do animal:
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="totó"
            name="name"
          ></input>
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">
            Cor:
          </label>
          <input
            type="text"
            class="form-control"
            id="pwd"
            placeholder="Preto com manchas brancas"
            name="cors"
          ></input>
        </div>{" "}
        <div class="mb-3">
          <label for="pwd" class="form-label">
            Raça:
          </label>
          <input
            type="text"
            class="form-control"
            id="pwd"
            placeholder="Rottweiler"
            name="raças"
          ></input>
        </div>
        Porte:
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option selected>Selecione um Porte....</option>
          <option value="1">Pequeno</option>
          <option value="2">Médio</option>
          <option value="3">Grande</option>
        </select>
        <br></br>
        Pelo:
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option selected>Selecione um Pelo...</option>
          <option value="1">Curto</option>
          <option value="2">Médio</option>
          <option value="3">Longo</option>
        </select>
        <br></br>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Upload Arquivo
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          ></input>
        </div>
        <div class="form-check mb-3">
          <label class="form-check-label">
            <input
              class="form-check-input"
              type="checkbox"
              name="remember"
            ></input>
          </label>
          <label for="comment">Descrição:</label>
          <textarea
            class="form-control"
            rows="5"
            id="comment"
            name="text"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Publicar
        </button>
      </form>
    </>
  );
}
