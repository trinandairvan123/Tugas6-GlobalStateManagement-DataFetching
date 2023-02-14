/** Libs */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { submitDataUser } from "../../store/reducer-pendaftaran";

export default function FormPendaftaran() {
    // State
    const [isError, isErrorSet] = useState(false);

    // Hooks
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onSubmit' });
    const dispatch = useDispatch();

    // Handler
    const handleRegister = (e) => {
        console.log(e);
        if (e.suratKesungguhan.length < 1) {
            alert('Data Pendaftar Tidak Sesuai');
            isErrorSet(true);
        } else {
            alert(`Data Pendaftar "` + e.nama + `" Data Pendaftar Berhasil Diterima`);
            dispatch(submitDataUser(e))
            isErrorSet(false);
            reset();
        }
    }
    const handleError = (errors, e) => {
        console.log(errors);
        if (errors.suratKesungguhan !== undefined) {
            isErrorSet(true);
        } else {
            isErrorSet(false);
        }
        alert('Data Tidak Sesuai')
    };

    return (
        <div className="App">
            <h1 className="mb-5">Pendaftaran Bootcamp</h1>
            <form onSubmit={handleSubmit(handleRegister, handleError)}>
                <div className="mb-3">
                    <label htmlFor="namaPeserta" className="form-label">Nama Lengkap Anda:</label>
                    <input className="form-control" id="namaPeserta" {...register("nama", {
                        required: { value: true, message: 'Nama Lengkap Wajib Diisi' },
                        minLength: { value: minLengthName, message: `Nama Lengkap Tidak Boleh kurang dari ${minLengthName} karakter` },
                        pattern: {
                            value: /^[a-zA-Z ]*$/,
                            message: 'Nama Lengkap Peserta',
                        }
                    })} type={'text'} />
                    {errors?.nama && <div className="text-danger">{errors?.nama?.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="emailPeserta" className="form-label">Masukkan Email Anda:</label>
                    <input className="form-control" id="emailPeserta"  {...register("email", {
                        required: { value: true, message: 'Email Wajib Diisi' },
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Email tidak sesuai',
                        }
                    })} type={'email'} />
                    {errors?.email && <div className="text-danger">{errors?.email?.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phonePeserta" className="form-label">Nomor Handphone Anda:</label>
                    <input className="form-control" id="phonePeserta" {...register("phonePeserta", {
                        required: { value: true, message: 'No Handphone Wajib Diisi' },
                        minLength: { value: phoneLength.min, message: `Nomor Handphone Dilarang kurang dari ${phoneLength.min} karakter` },
                        maxLength: { value: phoneLength.max, message: `Nomor Handphone Dilarang lebih dari ${phoneLength.max} karakter` },
                        pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: 'No Handphone tidak sesuai',
                        },
                    })} type={'text'} />
                    {errors?.phonePeserta && <div className="text-danger">{errors?.phonePeserta?.message}</div>}
                </div>
                <div className="row mb-3">
                    <label htmlFor="formRadioBackground" className="form-label">Pendidikan Anda:</label>
                    <div>
                        <div className="form-check form-check-inline" id="formRadioBackground">
                            <input {...register('backgroundPendidikan', { required: { value: true, message: 'Latar Belakang Pendidikan Harus Pilih Salah Satu' } })}
                                type="radio"
                                name="backgroundPendidikan"
                                value="Ilmu Komputer"
                                className="form-check-input"
                                id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Ilmu Komputer
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register('backgroundPendidikan', { required: { value: true, message: 'Latar Belakang Pendidikan Harus Pilih Salah Satu' } })}
                                type="radio"
                                name="backgroundPendidikan"
                                value="Fakultas Lain"
                                className="form-check-input"
                                id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Fakultas Lain
                            </label>
                        </div>
                    </div>
                    {errors?.backgroundPendidikan && <div className="text-danger">{errors?.backgroundPendidikan?.message}</div>}
                </div>
                <div className="row mb-3">
                    <label htmlFor="formSelectClass" className="form-label">Pilih Bootcamp:</label>
                    <div>
                        <select className="form-select" aria-label="Default select example" {...register("pilih", {
                            required: { value: true, message: 'Bootcamp Harus Pilih Salah Satu' }
                        })}>
                            <option value="">Pilih Bootcamp yang Diminati</option>
                            <option value="React Js">React Js</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Spring Boot">Spring Boot</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Vue Js">Vue Js</option>
                        </select>
                    </div>
                    {errors?.pilih && <div className="text-danger">{errors?.pilih?.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Surat Keikutsertaan Bootcamp:</label>
                    <input className="form-control" type="file" id="formFile" {...register("suratKeikutsertaan", { required: { value: true, message: 'Harus Melampirkan Surat Keikutsertaan Bootcamp' } })} />
                    {isError && <div className="text-danger">Surat Pendukung</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Kesan dan Pesan Selama Bootcamp:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register("harapan")}></textarea>
                </div>
                <div className="row gap-3">
                    <button type="submit" className="btn btn-success col-auto">Submit</button>

                    <button type="reset" className="btn btn-danger col-auto">Reset</button>
                </div>
            </form>
        </div>
    );
}

const minLengthName = 3;
const phoneLength = {
    min: 9,
    max: 14
};