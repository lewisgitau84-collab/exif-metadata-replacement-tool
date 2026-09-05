export interface MetaFields {
  make: string; model: string; lens: string; software: string; dateTime: string;
  exposureProgram: number; iso: number; shutter: string; aperture: string; focalLength: string;
  bias: number; meteringMode: number; lightSource: number; flash: boolean; whiteBalance: number;
  focal35mm: number; subjectDistanceRange: number; copyright: string; artist: string;
  gpsLat: string; gpsLon: string; gpsAlt: string; gpsInclude: boolean;
}
export const blankFields = (): MetaFields => ({make:"Apple",model:"iPhone 15 Pro",lens:"",software:"",dateTime:"",exposureProgram:1,iso:80,shutter:"0.01",aperture:"1.78",focalLength:"13.48",bias:0,meteringMode:2,lightSource:0,flash:false,whiteBalance:0,focal35mm:0,subjectDistanceRange:0,copyright:"",artist:"",gpsLat:"",gpsLon:"",gpsAlt:"0",gpsInclude:true});
export const exposureProgramNames=["Manual","Auto","Aperture priority","Shutter priority","Creative program","Action program","Portrait mode","Landscape mode"];
export const lightSourceNames=["Unknown","Daylight","Fluorescent","Tungsten (incandescent)","Flash"];
export const meteringModeNames=["Unknown","Pattern","Average","Center weighted","Multi-spot","Spot","Matrix"];
export const subjectRangeNames=["Unknown","Unknown","Macro","Close view","Distant view"];
export interface CameraPreset {id:string;label:string;make:string;model:string;lens:string;software:string;iso:number;shutter:string;aperture:string;focal:string;focal35mm:number;}
export const CAMERA_PRESETS:CameraPreset[]=[
{id:"iphone15",label:"iPhone 15 Pro",make:"Apple",model:"iPhone 15 Pro",lens:"",software:"17.4",iso:80,shutter:"0.01",aperture:"1.78",focal:"13.48",focal35mm:0},
{id:"iphone14",label:"iPhone 14",make:"Apple",model:"iPhone 14",lens:"",software:"16.6",iso:100,shutter:"0.01",aperture:"1.5",focal:"13.48",focal35mm:0},
{id:"s23",label:"Galaxy S23 Ultra",make:"Samsung",model:"SM-S918B",lens:"",software:"5.1.1",iso:50,shutter:"0.01",aperture:"1.7",focal:"6.53",focal35mm:23},
{id:"pixel8",label:"Pixel 8 Pro",make:"Google",model:"Pixel 8 Pro",lens:"",software:"14",iso:64,shutter:"0.01",aperture:"1.7",focal:"6.07",focal35mm:0},
{id:"a7iv",label:"Sony A7 IV",make:"SONY",model:"ILCE-7M4",lens:"Sony FE 24-70mm F2.8 GM II",software:"5.00",iso:100,shutter:"0.02",aperture:"2.8",focal:"35",focal35mm:35},
{id:"a7r5",label:"Sony A7R V",make:"SONY",model:"ILCE-7RM5",lens:"Sony FE 70-200mm F2.8 GM OSS II",software:"3.00",iso:64,shutter:"0.005",aperture:"2.8",focal:"85",focal35mm:85},
{id:"r6",label:"Canon EOS R6 II",make:"Canon",model:"EOS R6 Mark II",lens:"RF24-105mm F4 L IS USM",software:"2.0.0",iso:100,shutter:"0.016",aperture:"4",focal:"50",focal35mm:50},
{id:"a1",label:"Nikon Z 8",make:"NIKON CORPORATION",model:"NIKON Z 8",lens:"Nikkor Z 24-70mm f/2.8 S",software:"3.00",iso:100,shutter:"0.01",aperture:"2.8",focal:"35",focal35mm:35},
];
export const ISO_STEPS=[16,20,25,32,40,50,64,80,100,125,160,200,250,320,400,500,640,800,1000,1250,1600,2000,2500,3200,4000,5000,6400,8000,10000,12800,16000,25600];
