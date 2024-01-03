import Image from 'next/image'

export default function Card() {
    return (

        <div className="card card-compact w-2/12 bg-base-100 shadow-xl">
        <figure><img src="next.svg" alt="Application" /></figure>
        <div className="card-body">
            <h2 className="card-title">Master Ticket</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
            </div>
        </div>
        </div>
    )
}
