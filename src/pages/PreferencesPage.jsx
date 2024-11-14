import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PageTitle from "../components/extras/PageTitle";
import OptionButton from "../components/buttons/OptionButton";
import SecondaryButton from '../components/buttons/SecondaryButton';
import ImageButton from "../components/buttons/ImageButton";
import { clothes, accesories, accessoriesColors, manHaircut, womanHaircut, makeup, haircolor } from '../components/extras/StylesData'; 
import { useSession } from '../contexts/SessionContext';
import request from '../api';

const PreferencesPage = () => {
    const navigate = useNavigate();
    const { session } = useSession();

    const validationSchema = Yup.object({
        recomendaciones: Yup.string().required('Required'),
        ropa: Yup.string().required('Required'),
        accesorios: Yup.string().required('Required'),
        joyeria: Yup.string().required('Required'),
        cortecabello: Yup.string().required('Required'),
        tintecabello: Yup.string().required('Required'),
        maquillaje: Yup.string().when('recomendaciones', (recomendaciones, schema) => {
            return recomendaciones === 'Femenina'
                ? schema.required('Required')
                : schema.notRequired();
        }),
    });

    const handleSubmit = async (values) => {
        const payload = {
            idusuario: session.id,
            ajusteropa: values.ropa,
            tintecabello: values.tintecabello,
            cortecabello: values.cortecabello,
            accesorios: values.accesorios,
            joyeria: values.joyeria,
            ropa: values.ropa,
            maquillaje: values.maquillaje,
            recomendaciones: values.recomendaciones
        };
        
        console.log('Payload:', payload);

        try {
            await request('/user-preferences/', 'POST', payload);

            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const scrollLeft = (id) => {
        const container = document.getElementById(id);
        container.scrollBy({ left: -150, behavior: 'smooth' });
    };

    const scrollRight = (id) => {
        const container = document.getElementById(id);
        container.scrollBy({ left: 150, behavior: 'smooth' });
    };

    return (
        <Formik
            initialValues={{
                recomendaciones: '',
                ropa: '',
                accesorios: '',
                joyeria: '',
                cortecabello: '',
                tintecabello: '',
                maquillaje: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue, errors, touched }) => (
                <Form>
                    <div className="preferences-page">
                        <div className="title">
                            <PageTitle>Preferencias</PageTitle>
                        </div>
                        <div className="preferences-content">
                            {/* Estilo de recomendación */}
                            <label className="subtitle-preferences">Estilo de recomendación</label>
                            <div className="page-button">
                                <OptionButton
                                    className={values.recomendaciones === 'Femenina' ? 'selected' : ''}
                                    onClick={() => setFieldValue('recomendaciones', 'Femenina')}
                                >
                                    Femeninas
                                </OptionButton>
                                <OptionButton
                                    className={values.recomendaciones === 'Masculino' ? 'selected' : ''}
                                    onClick={() => setFieldValue('recomendaciones', 'Masculino')}
                                >
                                    Masculinas
                                </OptionButton>
                            </div>
                            {errors.recomendaciones && touched.recomendaciones && <small className="invalid-feedback">{errors.recomendaciones}</small>}
                            <hr />
                            
                            {/* Ropa */}
                            <div className="style-section">
                                <label className="subtitle-preferences">Estilo de ropa</label>
                                <button className="arrow-button left" onClick={() => scrollLeft('clothes')}>&lt;</button>
                                <div className="style-buttons-container" id="clothes">
                                    <div className="style-buttons">
                                        {clothes.map((style) => (
                                            <ImageButton
                                                key={style.name}
                                                imageSrc={style.src}
                                                isSelected={values.ropa === style.name}
                                                onClick={() => setFieldValue('ropa', style.name)}
                                                title={style.name}
                                            />
                                        ))}
                                    </div>
                                </div> 
                                <button className="arrow-button right" onClick={() => scrollRight('clothes')}>&gt;</button>
                                {errors.ropa && touched.ropa && <small className="invalid-feedback">{errors.ropa}</small>}
                            </div>
                            <hr />

                            {/* Accesorios */}
                            <div className="style-section">
                                <label className="subtitle-preferences">Estilo de accesorios</label>
                                <button className="arrow-button left" onClick={() => scrollLeft('accesories')}>&lt;</button>
                                <div className="style-buttons-container" id="accesories">
                                    <div className="style-buttons">
                                        {accesories.map((accessory) => (
                                            <ImageButton
                                                key={accessory.name}
                                                imageSrc={accessory.src}
                                                isSelected={values.accesorios === accessory.name}
                                                onClick={() => setFieldValue('accesorios', accessory.name)}
                                                title={accessory.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button className="arrow-button right" onClick={() => scrollRight('accesories')}>&gt;</button>
                                {errors.accesorios && touched.accesorios && <small className="invalid-feedback">{errors.accesorios}</small>}
                            </div>
                            <hr />

                            {/* Colores de accesorios */}
                            <label className="subtitle-preferences">Colores de accesorios</label>
                            <div className="style-section">
                                <button className="arrow-button left v2" onClick={() => scrollLeft('accessoryColors')}> &lt; </button>
                                <div className="style-buttons-container" id="accessoryColors">
                                    <div className="style-buttons">
                                        {accessoriesColors.map((accessoryColor) => (
                                            <ImageButton
                                                key={accessoryColor.name}
                                                imageSrc={accessoryColor.src}
                                                isSelected={values.joyeria === accessoryColor.name}
                                                onClick={() => setFieldValue('joyeria', accessoryColor.name)}
                                                title={accessoryColor.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button className="arrow-button right v2" onClick={() => scrollRight('accessoryColors')}> &gt; </button>
                                {errors.joyeria && touched.joyeria && <small className="invalid-feedback">{errors.joyeria}</small>}
                            </div>
                            <hr />

                            {/* Cortes de cabello para hombres */}
                            {
                                values.recomendaciones === 'Masculino' &&
                                <>
                                    <label className="subtitle-preferences">Cortes de cabello</label>
                                    <div className="style-section">
                                        <button className="arrow-button left v2" onClick={() => scrollLeft('manHaircuts')}> &lt; </button>
                                        <div className="style-buttons-container" id="manHaircuts">
                                            <div className="style-buttons">
                                                {manHaircut.map((manHair) => (
                                                    <ImageButton
                                                        key={manHair.name}
                                                        imageSrc={manHair.src}
                                                        isSelected={values.cortecabello === manHair.name}
                                                        onClick={() => setFieldValue('cortecabello', manHair.name)}
                                                        title={manHair.name}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <button className="arrow-button right v2" onClick={() => scrollRight('manHaircuts')}> &gt; </button>
                                        {errors.cortecabello && touched.cortecabello && <small className="invalid-feedback">{errors.cortecabello}</small>}
                                    </div>
                                    <hr />
                                </>
                            }

                            {
                                values.recomendaciones === 'Femenina' &&
                                <>
                                    {/* Cortes de cabello para mujeres */}
                                    <label className="subtitle-preferences">Cortes de cabello</label>
                                    <div className="style-section">
                                        <button className="arrow-button left v2" onClick={() => scrollLeft('womanHaircuts')}> &lt; </button>
                                        <div className="style-buttons-container" id="womanHaircuts">
                                            <div className="style-buttons">
                                                {womanHaircut.map((womanHair) => (
                                                    <ImageButton
                                                        key={womanHair.name}
                                                        imageSrc={womanHair.src}
                                                        isSelected={values.cortecabello === womanHair.name}
                                                        onClick={() => setFieldValue('cortecabello', womanHair.name)}
                                                        title={womanHair.name}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <button className="arrow-button right v2" onClick={() => scrollRight('womanHaircuts')}> &gt; </button>
                                        {errors.cortecabello && touched.cortecabello && <small className="invalid-feedback">{errors.cortecabello}</small>}
                                    </div>
                                    <hr />

                                    {/* Maquillaje */}
                                    {values.recomendaciones === 'Femenina' && (
                                        <>
                                            <label className="subtitle-preferences">Estilo de maquillaje</label>
                                            <div className="style-section">
                                                <button className="arrow-button left v2" onClick={() => scrollLeft('makeupStyles')}> &lt; </button>
                                                <div className="style-buttons-container" id="makeupStyles">
                                                    <div className="style-buttons">
                                                        {makeup.map((makeUp) => (
                                                            <ImageButton
                                                                key={makeUp.name}
                                                                imageSrc={makeUp.src}
                                                                isSelected={values.maquillaje === makeUp.name}
                                                                onClick={() => setFieldValue('maquillaje', makeUp.name)}
                                                                title={makeUp.name}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <button className="arrow-button right v2" onClick={() => scrollRight('makeupStyles')}> &gt; </button>
                                                {errors.maquillaje && touched.maquillaje && <small className="invalid-feedback">{errors.maquillaje}</small>}
                                            </div>
                                            <hr />
                                        </>
                                    )}
                                </>
                            }

                            {/* Color de cabello */}
                            <label className="subtitle-preferences">Color de cabello</label>
                            <div className="style-section">
                                <button className="arrow-button left v2" onClick={() => scrollLeft('hairColors')}> &lt; </button>
                                <div className="style-buttons-container" id="hairColors">
                                    <div className="style-buttons">
                                        {haircolor.map((hairColor) => (
                                            <ImageButton
                                                key={hairColor.name}
                                                imageSrc={hairColor.src}
                                                isSelected={values.tintecabello === hairColor.name}
                                                onClick={() => setFieldValue('tintecabello', hairColor.name)}
                                                title={hairColor.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button className="arrow-button right v2" onClick={() => scrollRight('hairColors')}> &gt; </button>
                                {errors.tintecabello && touched.tintecabello && <small className="invalid-feedback">{errors.tintecabello}</small>}
                            </div>
                            <hr />

                            {/* SIGUIENTE */}
                            <div className="secondaryButton4">
                                <SecondaryButton type="submit">
                                    Siguiente
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PreferencesPage;