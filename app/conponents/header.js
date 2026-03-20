//インポートした全てのページに共通のヘッダーを付与する
import Image from "next/image"
import Link from "nect/link"

const Header = () => {
    return(
    <header>
        <div>
            <Link href="/">
            <Image src="/herader.svg" width={1330} height={148} alt="header-image" priority/>
            </Link>
        </div>
        <nav>
            <ul>
                <li><Link herf="/user/register">登録</Link></li>
                <li><Link herf="/user/login">ログイン</Link></li>
                <li><Link herf="/item/create">アイテム作成</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header