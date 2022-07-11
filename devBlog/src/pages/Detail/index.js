import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './styles.js'
import { useNavigation, useRoute } from '@react-navigation/native'

import api from '../../services/api'
import { Feather, Entypo } from '@expo/vector-icons'
import { Share, TouchableOpacity, modal } from 'react-native'

import LinkWeb from '../../components/LinkWeb/index.js'
import { Modal } from 'react-native-web';

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()
  const [post, setPost] = useState({})
  const [links, setLinks] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [openLink, setOpenLink] = useState({})

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `
        Confere esse post: ${post?.attributes?.title}

        ${post?.attributes?.title}

        Vi lá no app devpost!
        `
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Activity type')
        } else {
          console.log('Compartilhado com sucesso')
        }
      }
      else if (result.action === Share.dismissedAction) {
        console.log('Modal fechado')
      }

    } catch (error) {
      console.log('error')
    }
  }

  function handleOpenLink(link) {
    setModalVisible(true)
    setOpenLink(link)
  }

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`api/posts/${route.params?.id}?populate=cover,category,Opcoes`)
      setPost(response.data.data)
      setLinks(response.data?.data?.attributes?.Opcoes)
    }
    getPost()
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleShare}>
          <Entypo name='share' size={25} color='#fff' />
        </TouchableOpacity>
      )
    })
  }, [navigation, post])



  return (
    <S.Container>
      <S.Image
        resizeMode='cover'
        source={{
          uri: `http://192.168.100.188:1337${post?.attributes?.cover?.data?.attributes?.url}`
        }}
      />
      <S.Title>{post?.attributes?.title}</S.Title>
      <S.DescriptionContainer
        showsVerticalScrollIndicator={false}
      >
        <S.Description>{post?.attributes?.description}</S.Description>
        {links.length > 0 && (

          <S.Title>Links</S.Title>
        )}
        {links?.map(link => (

          <S.LinksContainer
            key={link.id}
            onPress={() => handleOpenLink(link.id)}
          >
            <Feather name='link' color='#1e4687'
              size={14} />
            <S.Link>{link.name}</S.Link>
          </S.LinksContainer>

        ))
        }
      </S.DescriptionContainer>
      <Modal visible={modalVisible} transparent={true}>
        <LinkWeb
          link={openLink?.url}
          title={openLink?.name}
          closeModal={() => setModalVisible(false)}

        />
      </Modal>
    </S.Container>
  )
}