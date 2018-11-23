import React, { Component } from 'react';
import ProgramCardSlider from '../../program_card/ProgramCardSlider';
import ClubProfileTab from './ClubProfileTab';
import ClubProfileMain from './ClubProfileMain';
import AtletCardSlider from '../../atlet_card/AtletCardSlider';

import './ClubProfile.css';

class ClubProfile extends Component {
  render() {

    const clubProfile = {
      name: 'Aji Santoso International Football Academy',
      address: 'Lapangan Mojolangu Kompleks Griyashanta Blok J Kel. Mojolangu, Kec. Lowokwaru Kota Malang.',
      contact: '(0341) 489001',
      website: 'asifa.co.id',
      image: '../../static/image/asifa.png',
      description: 'Akademi sepakbola pertama di Indonesia yang bertaraf Internasional berada di kota Malang tepatnya di Lapangan sepak bola Mojolangu. Penerimaan siswa akan dilakukan dengan seleksi yang sangat ketat setiap tahunnya, sehingga hanya anak didik yang memiliki bakat besar yang dapat bergabung dengan ASIFA. Setiap anak didik ASIFA mendapatkan legalitas hukum untuk disalurkan ke klub-klub profesional. Para pemain akan mendapatkan sistem pelatihan modern dari staff pelatih yang bersertifikat FIFA. ASIFA memberikan semua yang dibutuhkan para anak didik untuk menjadi pemain sepakbola profesional di Indonesia maupun di dunia karena ASIFA menerapkan sistem kepelatihan dengan kurikulum yang modern dan melewati seleksi ketat. ASIFA memberikan dispensasi/keringanan kepada anak didik yang ekonominya kurang mampu yang memiliki talenta tinggi dengan menunjukkan surat keterangan tidak mampu dari kelurahan. Selain itu ASIFA akan memfasilitasi pendidikan formal bagi anak didik yang berasal dari luar kota Malang dengan sistem homeschooling, sehingga antara pendidikan formal dan informal dapat berjalan seimbang.',
      achievements: [
        {
          name: 'Juara 1 International Youth Soccer Turnament di Bandung 2015'
        },
        {
          name: 'Juara 1 International Youth Soccer Turnament di Bandung 2016'
        }
      ]
    }

    return(
      <div className="grey">
        <ClubProfileMain clubProfile={clubProfile} />
        <ClubProfileTab clubProfile={clubProfile} />
        <ProgramCardSlider title="Program Anda" isVisible={false}/>
        <AtletCardSlider />
      </div>
    )
  }
}

export default ClubProfile