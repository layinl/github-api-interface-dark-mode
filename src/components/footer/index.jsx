import React from 'react'
import * as S from './styled'


export default function Footer() {
  return (
    <S.FooterWrapper>
      <h2>
        Feito com &hearts; por 
        <a href="http://github.com/benits" target={'_blank'} rel={'noreferrer'}> Benits</a>, com modo escuro adicionado por <a href="http://github.com/layinl" target={'_blank'} rel={'noreferrer'}>layin</a>, @ <a href="http://dio.me" target={'_blank'} rel={'noreferrer'}>Digital Innovation One</a>
        </h2>
    </S.FooterWrapper>
  )
}
