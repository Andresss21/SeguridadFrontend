import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { data } from "jquery";
import swal from "sweetalert";

export function CreateClinica(clinica) {


        //const token = await config();
        const bearer = sessionStorage.getItem("Token");
        //console.log(token.headers["X-CSRF-TOKEN"]);
        axios.defaults.headers.common.Authorization = `Bearer  ${bearer}`;
        axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
        
    
        axios.post('http://192.168.1.11:8000/api/storeClinicas/', clinica).then((response) => {
            swal({ title: 'Clinica creada correctamente', icon: 'success', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false }).then(value => { window.location.href = '#/MisClinicas'; window.location.reload(true); });
        }).catch((error) => {
            swal({ title: 'Hubo un error en completar tu solicitud', icon: 'error', button: 'Aceptar', closeOnClickOutside: false, closeOnEsc: false });
            console.log(error.response);
        });
            


console.log(clinica.logo);
console.log(clinica.categoriaId);
    
    
}