/** Libs */
import { useParams } from "react-router-dom";
import { useFetchers } from "../../hooks/fetcher";

export default function AboutDetail() {
    const params = useParams();
    const { data, isLoading } = useFetchers({ path: `users/${params.id}`, method: 'get' });
    return (
        <div>
            <h1>Tentang Kami</h1>
            <h2>Bootcamp ini merupakan program pelatihan yang akan dilangsungkan secara intensif dengan materi yang telah terancang dan berhubungan dengan karir dalam bidang IT atau teknologi informasi. Pelatihan tersebut akan berlangsung secara intensif dengan membuat waktu belajar teknologi informasi menjadi lebih singkat.</h2>
            <div className="mt-4">
                {!isLoading ?
                    <div>
                        <div>
                            <img src={data?.data.avatar} />
                        </div>
                        <h3>{data?.data.first_name} {data?.data.last_name}</h3>
                        <p>{data?.data.email}</p>
                    </div>
                    :
                    <div>Sabar</div>
                }
            </div>
        </div>
    );
}