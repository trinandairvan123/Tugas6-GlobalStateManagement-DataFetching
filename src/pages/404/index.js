/** Libs */
import { NavLink } from "react-router-dom";

export default function NotFound() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{marginBottom: '30px'}}>Pages Tidak Ditemukan</h1>
            <NavLink to={'/'}>Back</NavLink>
        </div>
    );
}