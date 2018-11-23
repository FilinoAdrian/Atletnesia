import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
 
import './FormProgram.css';

const options = [
  { value: 'sepak_bola', label: 'Sepak Bola' },
  { value: 'basket', label: 'Basket' },
  { value: 'bulutangkis', label: 'Bulutangkis' },
  { value: 'atletik', label: 'Atletik' },
  { value: 'catur', label: 'Catur' },
  { value: 'bridge', label: 'Bridge' },
  { value: 'panahan', label: 'Panahan' },
  { value: 'pencak_silat', label: 'Pencak Silat' },
  { value: 'karate', label: 'Karate' },
  { value: 'taekwondo', label: 'Taekwondo' },
  { value: 'tinju', label: 'Tinju' },
  { value: 'balap_sepeda', label: 'Balap Sepeda' },
  { value: 'panjat_tebing', label: 'Panjat Tebing' },
  { value: 'voli', label: 'Voli' },
  { value: 'sepak_takraw', label: 'Sepak Takraw' }
];

class FormProgram extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    }
  }

  handleSelect = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    
    const { selectedOption } = this.state;

    return (
      <div className="form-background">
        <Container>
          <Form className="form-wrapper">
            <h4>Buat dan Sebarkan Info Beasiswa Anda</h4>
            <FormGroup className="mb-5">
              <Label className="form-label">Cabang Olahraga</Label>
              <Select
                value={selectedOption}
                onChange={this.handleSelect}
                options={options}
                placeholder={options[0].label}
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label className="form-label" for="judul">Judul Beasiswa</Label>
              <Input type="text" name="judul" id="judul" placeholder="Contoh: Beasiswa Bulutangkis PB Djarum" />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label className="form-label" for="exampleDate">Batas Akhir Pendaftaran</Label><br />
              <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label className="form-label" for="deskripsi">Deskripsi</Label>
              <Input type="textarea" name="deskripsi" id="deskripsi" rows="10" />
            </FormGroup>
            <button type="submit" className="buat-beasiswa">Post</button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default FormProgram;