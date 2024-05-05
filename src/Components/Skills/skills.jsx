import { motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

export default function Skills() {
    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            const locomotive = new LocomotiveScroll({
                el: scrollElement,
                smooth: true,
            });
            locomotive.update();
            return () => {
                locomotive.destroy();
            };
        }
    }, []);
    return (
        <>
            <section className="text center items-center body-font" style={{ paddingTop: "100px" }}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl text-5xl font-medium title-font mb-4 text-white">My Skills</h1>
                    </div>
                    <SkillTiles />
                </div>
            </section>
        </>
    )
}

function SkillTiles() {
    return (
        <>
            <div className="lg:flex items-center justify-center text-start">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Python</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">JavaScript</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="data:image/png;base64,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" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Dart</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://digitalhumanity.co.za/wp-content/uploads/Dart-colour.png" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Java</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="lg:flex items-center justify-center text-start">
                {/* <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Solidity</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://pbs.twimg.com/media/E0KH3AOX0AQPjKa.png" />
                        </div>
                    </div>
                </motion.div> */}
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">C</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">HTML</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEX////kTSbhNQD7497kSyLjRxzlWz3jQAj1x8Dqg3LiPQD/+vjiPxH0wrnjSiHiRRjpemX+9PH/+/nnaU/wq5/qZUbri3v87uv3rp/tblL7wrf0kn77uKvqSRn/6eT93dfxd1zziHP/zsXtWDL6n4z1opL1g2rtUCT908vzel/7s6XuY0H93tfvaUv81s7zu7P5k37lVDPtlITodF3gJgDytKvskYDvopXpeWPlWz7riHfE1GTcAAAM9UlEQVR4nO1da1vivBa1pZliiK3loqJcRkXBQQXF0Zn5/z/stBQo3ZC2WWlpzyvrw8gIT+wiyc7alyQnJ0ccccQRRxxxxBFHHBGg6Q3vZlej+e35ohtgcX47H13N7oZes+xH04b3fP3w2BlzbgvhMsacEP4rVwib83Hn8eH62Sv7MUHUejedPrdd5hhyOMy1eb9z06uV/biKGPQex1wkcovzFHz82BuU/dhZMRkF7KyM7NawApajSdkPn47JvM9dVXYbli7vzytNcjiyOAPZrcG4NRqWTWQ/Gr0p3nukJ6e9Rtl0djC46YushiUdjujfVMvuDJ/MXLovguWaT9UZrJMuz6/7IjDerYbVeS2GXwCHd1/LpndSeyqMX8jxqVy14821V4c0MD4vUbf+4m7B/AK4/FdJ/IZT+wD8AtjTMsxqc1ToBIzD4aODu5Kv9+Jg/AKI+wNb1UN2YAi/Gw/IbzA9bAeGENODCbnrg3dgCIdfH4bgnJfCLwCfH4Cf91LGCF1DvBS+/A/HRYuYZLBxwUtjWVMwQsGT8cosmV8A86o4gqPybMw2ilsZbw+lQ9Ng3xZD8LFMIxqHeCyC4M/qEPQp/vyPEyyCYoWGaIi8B+pt1Qj6FHM1N6OqWNFt2DkuGlfVWAcpeG5L/3UVlMw+mDkJuOdq9mAA/pwHQW9cttiWwxnn4Uy9lOsuJYO96BO8UVgnLFf4WH4jTvBKWKufEQxj+RkRhpJX764/BgwWcaNL8FplErqXzUbj5Mynwf6dNPyXLfEe/NyCadeX77wHFK03//ONZsNh58tf/gOGi667OFCyMmI5K87sJcMALfFAGjR5PXwR5BvNMAbaZD7DABfIhOB6Ebip0sBRYVg3jRWvk4YWQ2eqQ3CkJtZUGJ4smOnlwdAQGtrmVXElDBnOTCH4aSrDy4/2SS4MDQ4H/Jv3isYtZDj8arfbZyFD9/xsNpuF4bFZAHvD8OT3+oUuQ+ceTdsojtE1wy20HGbbthl2lum/FEbEcANdhvA4HSqrtT0Mg1+7IcNwCSyCocGxIKqaHVVjeLn6wGU+DDF7+kvdJ8zOcBj+qvaVD0PDBhLhHuBRZGdY+1h+1GjHGJ6afAmg+IirS/AboAhhtR4ab29vFykMzYX/b9uMM/Qul/B+qFN0lfVpDXEKVwy5ZbmnKQw5PzsZmCLOcA2AocFV626ekCmxq2nkDC23uWA5MmRPagRV1Yw6Q8N5c40cGaoqmy7k14tGBoaTFUPDpyFCXZMLQ9ZVITjBQjNsduYjcP2cRd1/Ve8sH5VdBP85C7808RW8bodyafWO5bSWP1eov0GVnEqdiHWh//i+MLOXfeUEr+zVk7Llf1afce2leou/E358DaxU1VHoRHW9VgkoaDfIkJaP7OZ0UNUIcBrMrAENRM5UAlmFTaOfb1H64WD1s21i6Kln0sxioPwcopeJobpf6A5qRWCgPFuy+YnAUmFm+ubUod6JmRaMkbqdMS/TmwVwqc7Qfc/QrqFuZ8xias2G6gwtI71ZRJLyYva2FPQoc0DP2GeFMDwDqgdYegVqX73VtXuUN9qI8uintQr5TZnmtzreEYapwxSwpBt/N28g6UTDTYt/jyH3elEIwwXC0BonN6qWEd20msFGAwDWLSM1Ywpo0gDFiBrMiUvRpo+Y71slhiy5pA+ahgXJNkC0BUieiFCkO2CYS20SwTMYakiMfoPTUCPPnAAsKp0yEW/QJGwRsm0Gft0sKZbRAeOkhcg2SLT5cDryNj1ElC4ZkpIL9gPAG9F+D2hArC/PJcJ1lu5FvCHbsdRB1e0FyjChJvMaLXamsq2FjHY61CHRFsCWl7rB48J6izd0ijwc9TKx/IyxO2e2ACoan6ETb+gzD7/HQRkmqBrUlPrLRbwq6QtiGF9Um/AGCLkxbY7RNg0el23QUkayDpd4AmwsqwJDCkxWIEqpjrRkxkPyqII0EkpPNIrySSQWElzEQdFIYkqXizt8Zwyxg0h+zmLxp0EibeunuZMwnOFtCrKWRQwtOyM4WXHa+FYreyZheIW36X7Fm9oaYfWsIIsFZI9DCNl2ISjOtmJIZFu0Wgv0XDJYtCXE25Bw9wpUtkWKC3b/YdGWEPi+xduki2wk28DiVh35YTDZ1sRznCEVpp+bpuCcBixLDYOUWEVY4N+a5cSnW+S9it+Sv5aChvLpmREcWYT6p8YmNSLbosUMzWloiDZ5dRRa6xWAGJRItklHTAp0inoKYUgMSiS5nBbGUKfyrBCGxKBE0Vxqg7JCQ7QVw5AYlEbUAxxj+Ftjf7yUoYYtpUGWZpQ3YqfZQHaaoLHEJUOZLdVYDw33M97W1nrNMsEkahnfe5Fg3TQ0jcH+kPGg2hbdLfRH52FkmkZDl+6YTOXxQPMpUEByBaku1fAtDOtvvC3lKgOq0KFq9hWkvoWGf+h76HHZpmwK7XhspaFT4yr1DzV8/J04kmpbVNg2dOqUpT6+RpwmQbZlAxUGYAI4hDROo3UABqneqyk+IXUwtbYLSGNtGvHSHWuv6hrQIAEUcd08iyxeqhHz3hn7npklvhaZI1pWpWUTpDFvncDBTm4sU3gtsrg0WKcl2uRJYDj35IN9SpuVI6qRpQHXT51Hkeee4Pxh0OwpwDCqhKTBDigDuUJC/hDOARtg9V4022wiSzViiUk5YJ3lwvoBMIzi2lSWakTakvL4cC1GAEHaGmwgL42I1CutKNQxpQm1GFrGlCTHvj7WO18+5MU2kRNIYnVg1d4SSfU0cE3UkqEsDZwQT4xmGxkBOqItsSYKrWtbMpQlSRNqpDezjZY6AFstNkisa9PILNNSilqWeOLmM1R4gxuRwwdJ3JkP1pcGoPHE6Old6Z/b9BRdazRiiSmF3hqqhsq2aMBLK4i9DUOXjGQN0ZZSI6wxEalBsTbDwZRZ78jFojIE2moRIqXOG6vVX4KRNPDfzcpjyiZG5ARS4Q1ttQiRdroZPhHpVIqibex0ss+dadQj8UllKS7a0vZbaMTbqDncGmiMm4t2vCNr7YW5dQsPlaXYVosAqXtmNMw0SVDEaymYMN8+6+GE9OoXb6aI9RLNhePLYfr2PFyaEpO5U9tmudxutYftls138rt0quIMU/euaQS+iWzbW/nFBN97wiUxt7hoy7D/EB+mZNOF0nYJ0v+qkboIWbazwpOc1Icq9QOZw+hWi2x7zODFltaVKDCkdvgMFR6Z6iLgWCyVbR92xiltuSZx6WDRlq0+Sf1MhRBUeXln/2zTTWPpLyPuZ50Uv6EhsYxn76HalKaBA9TafwR3ZV+Z43Jx/nuPykKr9jKei4GebSKLtr1+dezdO1iD1bHzJRlUoGjLerYJej5NQrTNq7//MO1onfeH5o+1wtkHMNKW+eA9sByJRiIILmenbjAtHde09w7NLYBbLTKfMYSeEyVSG35utz5asqEZAdxqoXDsHrhg0IggDLBqT6WUFauOUj6cUQYsIKZyXhuomuByYApsDKlt1e3msfkMBhRpUzs3EetEtBx4B9BWC9Xd1og5peEkGMhWC9XzS6HJvk+2QUBEm7qZA4RNbkecAKJN/RxhpPQkMa2lAiDJB5wFjZznzf6kqLEsqP0GuhA5zxvyE31Fzd6ps6eARv1CpLuUuwDvuMDWXd8rMltt5CSQ4Vdr2/9QAao1lO9GWMPvSuN0pqJSL2fnjin1lNMA3+GhfL/FFixm879fmRbhxuT9Bwc7bwn8fgs8qLf6y74bn2Z7au3FngCAGnTOjoHH6QaB7dkJNK3g1S8yhKpSoXPPDB5328Z+26NhV+LQuytIJ2MaA3O3bY9vVxhuVwg073tSu7MrESvb403eg9RabkcV61/xrHLvWir8Act17Uoc+veufYO7877B/Yf//Tssv8E9pN/gLtlvcB/wN7jT+Rvcy/0N7lavGMUiCFZqoOY/REPcVsWi2jkbmQijaqyLPNdlIo6rKqgbM8eFfhfXvGwZ7ug7hMkYjst1pti4mLs0tuC9lGlSxUsu7lIK5uXZG55ePZoLypqMhU/BCINpGSNVTPUTW9kxOng3OkWugvvwen/YbhT3RRz7nojmIbvR70A4+aKB4fRQOtWeFr4ISvCLH+IeQZdDKex84M150RKH8fkhFnk5ak+FTkeHP+VVDojjtVsYR4d3D25B92LSLWSsMt4t5j43BMMnM9eM0nIPxlNZBnQ/Bjf9vVu2MDiif3NIiZYNjd40n9Sg5fJpD686KhTDkaE9Ixk3RtUangSTeR/vSb/3+vPqWBcpJqMxV0/UW0zw8ej/gF6IQe8xYJnV9DgBu8de9WxLMmq9m06f224iT4e5Nu93bnrlKxcM3vP1w2NnzLkthMsYc0L4r1whbM7HnceH6+dydWceaHrDu9nVaH57vugGWJzfzkdXs7uhV4bTd8QRRxxxxBFHHHFEFfE/1NYoKc6xQP8AAAAASUVORK5CYII=" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">CSS</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="lg:flex items-center justify-center text-start">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">React.js</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="data:image/png;base64,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" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">AngularJS&nbsp;</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Flutter</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://logowik.com/content/uploads/images/flutter5786.jpg" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Django</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://copyassignment.com/wp-content/uploads/2022/06/Django-logo-474x360-1.jpg" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="lg:flex items-center justify-center text-start">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">AWS</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://pbs.twimg.com/profile_images/1641476962362302464/K8lb6OtN_400x400.jpg" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Firebase</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://logowik.com/content/uploads/images/firebase.jpg" />
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">MySQL</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://logowik.com/content/uploads/images/mysql8604.logowik.com.webp" />
                        </div>
                    </div>
                </motion.div>

            </div>
            <div className="lg:flex items-center justify-center text-start">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Git</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" />
                        </div>
                    </div>
                </motion.div>
                {/* <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-72 items-center text-start justify-center" style={{ padding: "10px" }}>
                    <div className="w-full h-28 max-w-md px-8 py-4 mt-16 rounded-lg shadow-lg bg-black">
                        <div className="flex justify-start md:justify-end">
                            <h1 className="mt-6 text-xl font-semibold text-white">Visual Studio<br /> Code</h1>
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full ml-auto" alt="" src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg" />
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </>
    )
}