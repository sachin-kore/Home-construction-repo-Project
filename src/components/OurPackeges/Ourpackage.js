import React from 'react'
import "./ourPackage.css";
import firstImg from './../../assets/card1.png';
import Primum from './../../assets/Primum.png';
import PRM from './../../assets/PRM.png';
import styles from "./../Login/styles.module.css";
import chevronDown from "./../../assets/chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Navbar from '../Navbar';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';




const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
                <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
            </>
        }
        className={styles.item}
        buttonProps={{
            className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
    />
);
const Ourpackage = () => {

    return (
        <Layout>

            <div className='ourpackage'>
                <h1>Pricing Plans.</h1>
            </div>
            <div className=''>

                <div className='packageWrapper'>

                    <div className='firstBox'>
                        <img className='firstImg' src={firstImg} alt='#' />
                        <div className='firstBoxDetails'>
                            <p style={{ fontSize: "23px", color: "#001659", fontWeight: "bold", marginTop: "25px" }}>Descent</p>
                            <p>₹1,600/sq.ft</p>
                            <p style={{ fontSize: "18px", color: "#001659", fontWeight: "bold" }}>(Incl. GST)</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Accordion>
                                <AccordionItem header="Safety and Housekeeping">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Design and Drawings">
                                    <ol className='OrderedList'>
                                        <li className='OlList'>Detailed 2D floor plan and 3D Elevation</li>
                                        <li className='OlList'> Structural designs as per IS codes</li>
                                        <li className='OlList'> MEP and Good For Constructions drawings</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Structure and Civil work">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Slab height – FFL to FFL 10′
                                            Steel- Fe500 Kamadhenu,Sunvik,Indiagold,Bhuwalka</li>
                                        <li className='OlList'> Cement – Dalmia,Maha,Priya</li>
                                        <li className='OlList'> Aggregates – 20mm and 40mm</li>
                                        <li className='OlList'>  Sand – M sand and P sand</li>
                                        <li className='OlList'>  Blocks – 4″ internal</li>
                                        <li className='OlList'>  walls and 6″ external walls</li>

                                        <li className='OlList'>M20grade concrete</li>
                                        <li className='OlList'>  UG Sump 6000 ltrs capacity 6″ thick wall with waterproof finishing.</li>
                                        <li className='OlList'> Soil test report</li>
                                        <li className='OlList'>  Soil test report</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Interior">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> 2D Furniture layout</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Kitchen Tiles">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> 2′ Wall tiles above granite slab 50/- Sqft
                                            Kitchen granite slab 80/- Sqft</li>
                                        <li className='OlList'> Kitchen sink upto 4000rs</li>
                                        <li className='OlList'> Sink cock and faucets upto 1500rs.</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Bathroom">
                                    <ol className='OrderedList'>
                                        <li className='OlList'>  Floor and wall tiles(upto 7′ height) 40/- Sqft.</li>
                                        <li className='OlList'> Sanitary ware and CP fittings upto 40000/-</li>
                                        <li className='OlList'> Cpvc pipes – Astral or equivalent</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Living,Parking,Staircase Flooring">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Vetrified tiles 40/- Sqft</li>
                                        <li className='OlList'> Staircase steps granite 80/-</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Electricals">
                                    <ol className='OrderedList'>


                                        <li className='OlList'>Fireproof Wires by Finolex</li>
                                        <li className='OlList'>Switches Anchor and Roma</li>
                                        <li className='OlList'> Upvc,Geyser,CCTV points will be provided.</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Door and windows">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Painting">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Miscellenious">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <Link to='/cards'>
                            <button className='firstBoxBtn'>Choose plan</button></Link>
                    </div>
                    <div className='firstBox'>
                        <img className='firstImg' src={Primum} alt='#' />
                        <div className='firstBoxDetails'>
                            <p style={{ fontSize: "23px", color: "#001659", fontWeight: "bold", marginTop: "25px" }}>Classic</p>
                            <p>₹1,800/sq.ft</p>
                            <p style={{ fontSize: "18px", color: "#001659", fontWeight: "bold" }}>(Incl. GST)</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Accordion>
                                <AccordionItem header="Safety and Housekeeping">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Design and Drawings">
                                    <ol className='OrderedList'>
                                        <li className='OlList'>Detailed 2D floor plan and 3D Elevation</li>
                                        <li className='OlList'> Structural designs as per IS codes</li>
                                        <li className='OlList'> MEP and Good For Constructions drawings</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Structure and Civil work">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Slab height – FFL to FFL 10′
                                            Steel- Fe500 Kamadhenu,Sunvik,Indiagold,Bhuwalka</li>
                                        <li className='OlList'> Cement – Dalmia,Maha,Priya</li>
                                        <li className='OlList'> Aggregates – 20mm and 40mm</li>
                                        <li className='OlList'>  Sand – M sand and P sand</li>
                                        <li className='OlList'>  Blocks – 4″ internal</li>
                                        <li className='OlList'>  walls and 6″ external walls</li>

                                        <li className='OlList'>M20grade concrete</li>
                                        <li className='OlList'>  UG Sump 6000 ltrs capacity 6″ thick wall with waterproof finishing.</li>
                                        <li className='OlList'> Soil test report</li>
                                        <li className='OlList'>  Soil test report</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Interior">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> 2D Furniture layout</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Kitchen Tiles">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> 2′ Wall tiles above granite slab 50/- Sqft
                                            Kitchen granite slab 80/- Sqft</li>
                                        <li className='OlList'> Kitchen sink upto 4000rs</li>
                                        <li className='OlList'> Sink cock and faucets upto 1500rs.</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Bathroom">
                                    <ol className='OrderedList'>
                                        <li className='OlList'>  Floor and wall tiles(upto 7′ height) 40/- Sqft.</li>
                                        <li className='OlList'> Sanitary ware and CP fittings upto 40000/-</li>
                                        <li className='OlList'> Cpvc pipes – Astral or equivalent</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Living,Parking,Staircase Flooring">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Vetrified tiles 40/- Sqft</li>
                                        <li className='OlList'> Staircase steps granite 80/-</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Electricals">
                                    <ol className='OrderedList'>


                                        <li className='OlList'>Fireproof Wires by Finolex</li>
                                        <li className='OlList'>Switches Anchor and Roma</li>
                                        <li className='OlList'> Upvc,Geyser,CCTV points will be provided.</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Door and windows">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Painting">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Miscellenious">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <Link to='/cards'>
                            <button className='firstBoxBtn'>Choose plan</button></Link>
                    </div>
                    <div className='firstBox'>
                        <img className='firstImg' src={PRM} alt='#' />
                        <div className='firstBoxDetails'>
                            <p style={{ fontSize: "23px", color: "#001659", fontWeight: "bold", marginTop: "25px" }}>Elegant</p>
                            <p>₹2,000/sq.ft</p>
                            <p style={{ fontSize: "18px", color: "#001659", fontWeight: "bold" }}>(Incl. GST)</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Accordion>
                                <AccordionItem header="Safety and Housekeeping">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Design and Drawings">
                                    <ol className='OrderedList'>
                                        <li className='OlList'>Detailed 2D floor plan and 3D Elevation</li>
                                        <li className='OlList'> Structural designs as per IS codes</li>
                                        <li className='OlList'> MEP and Good For Constructions drawings</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Structure and Civil work">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Slab height – FFL to FFL 10′
                                            Steel- Fe500 Kamadhenu,Sunvik,Indiagold,Bhuwalka</li>
                                        <li className='OlList'> Cement – Dalmia,Maha,Priya</li>
                                        <li className='OlList'> Aggregates – 20mm and 40mm</li>
                                        <li className='OlList'>  Sand – M sand and P sand</li>
                                        <li className='OlList'>  Blocks – 4″ internal</li>
                                        <li className='OlList'>  walls and 6″ external walls</li>

                                        <li className='OlList'>M20grade concrete</li>
                                        <li className='OlList'>  UG Sump 6000 ltrs capacity 6″ thick wall with waterproof finishing.</li>
                                        <li className='OlList'> Soil test report</li>
                                        <li className='OlList'>  Soil test report</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Interior">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> 2D Furniture layout</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Kitchen Tiles">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> 2′ Wall tiles above granite slab 50/- Sqft
                                            Kitchen granite slab 80/- Sqft</li>
                                        <li className='OlList'> Kitchen sink upto 4000rs</li>
                                        <li className='OlList'> Sink cock and faucets upto 1500rs.</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Bathroom">
                                    <ol className='OrderedList'>
                                        <li className='OlList'>  Floor and wall tiles(upto 7′ height) 40/- Sqft.</li>
                                        <li className='OlList'> Sanitary ware and CP fittings upto 40000/-</li>
                                        <li className='OlList'> Cpvc pipes – Astral or equivalent</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Living,Parking,Staircase Flooring">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Vetrified tiles 40/- Sqft</li>
                                        <li className='OlList'> Staircase steps granite 80/-</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Electricals">
                                    <ol className='OrderedList'>


                                        <li className='OlList'>Fireproof Wires by Finolex</li>
                                        <li className='OlList'>Switches Anchor and Roma</li>
                                        <li className='OlList'> Upvc,Geyser,CCTV points will be provided.</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Door and windows">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>
                                <AccordionItem header="Painting">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Miscellenious">
                                    <ol className='OrderedList'>
                                        <li className='OlList'> Barricading site boundary and mentaining proper materials stock.</li>
                                        <li className='OlList'> Regularly wearing of labour helmet and jackets</li>
                                        <li className='OlList'> Debry removal for Regular intervals of time</li>
                                    </ol>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <Link to='/cards'>
                            <button className='firstBoxBtn'>Choose plan</button></Link>
                    </div>
                </div>
            </div>

        </Layout>



    )
}

export default Ourpackage