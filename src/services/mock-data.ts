const MOCK_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const adTitles = [
  'Wireless Bluetooth Earbuds',
  'Portable Phone Charger',
  'Smartwatch with Heart Rate Monitor',
  'Wireless Gaming Headset',
  'Waterproof Action Camera',
  'Stainless Steel Water Bottle',
  'Digital Instant-Read Meat Thermometer',
  'Bluetooth Karaoke Microphone',
  'Foldable Laptop Stand',
  'Adjustable Dumbbell Set',
  'Mini Projector for Home Theater',
  'Wireless Charging Pad',
  'Ultrasonic Cool Mist Humidifier',
  'Electric Toothbrush with Timer',
  'Wireless Noise-Cancelling Headphones',
  'Fitness Tracker with GPS',
  'Cordless Handheld Vacuum Cleaner',
  'Portable Bluetooth Speaker',
  'Reusable Silicone Food Storage Bags',
  'Air Fryer with Digital Touchscreen',
  'Robot Vacuum Cleaner with Mapping',
  'Electric Standing Desk Converter',
  'Wireless Keyboard and Mouse Combo',
  'Waterproof Bluetooth Speaker',
  'Smart WiFi Thermostat',
  'Adjustable Laptop Table',
  'Fitness Smart Scale with App',
  'Cordless Hair Clippers',
  'LED Desk Lamp with USB Charging Port',
  'Bluetooth FM Transmitter for Car',
  'Portable Solar Power Bank',
  'Electric Milk Frother',
  'Automatic Soap Dispenser',
  'Wireless Outdoor Security Camera',
  '3D Printing Pen',
  'Mini Dehumidifier for Home',
  'Water Flosser with 10 Pressure Settings',
  'Portable Air Conditioner',
  'Smart Doorbell Camera with Motion Detection',
  'Foldable Exercise Bike',
  'Stainless Steel Coffee Maker',
  'Adjustable Bed Base with Massage',
  'Electric Wine Opener',
  'Cordless Stick Vacuum Cleaner',
  'WiFi Range Extender',
  'Wireless In-Ear Headphones',
  'Indoor Smart Garden',
  'Multi-Device Bluetooth Keyboard',
  'Fitness Smartwatch with Music Storage',
  'Smart WiFi Plug',
  'Portable Photo Printer',
  'Smart Video Doorbell',
  'Waterproof Wireless Earbuds',
  'Cordless Drill Driver',
  'Smart WiFi Light Bulb',
  'Portable Mini Air Purifier',
  'Smart Robot Lawn Mower',
  'Wireless Headphones with Built-in Microphone',
  'Home Theater Projector Screen',
  'Wireless Vertical Ergonomic Mouse',
  'Digital Kitchen Scale with LCD Display',
  'Electric Massage Gun',
  'Waterproof Bluetooth Headphones',
  'Adjustable Standing Desk with Memory Controller',
  'Electric Griddle with Non-Stick Surface',
  'Wireless Bluetooth Speakerphone',
  'Smart WiFi Security Camera with Night Vision',
  'Foldable Wireless Keyboard',
  'Smart LED Strip Lights',
  'Cordless Electric Lawn Mower',
  'Adjustable Weight Bench',
  'Portable Car Jump Starter',
  'Smart WiFi Deadbolt Lock',
  'Wireless Bluetooth Mouse',
  'Automatic Pet Feeder',
  'Cordless Leaf Blower',
  'Digital Luggage Scale',
  'Wireless Charging Car Mount',
  'Outdoor Wireless Security Camera',
  'Adjustable Standing Desk Converter',
  'Electric Pressure Cooker',
  'Smart WiFi Garage Door Opener',
  'Waterproof Bluetooth Speaker with LED Lights',
  'Cordless Hedge Trimmer',
  'Fitness Smart Scale with Body Composition Analysis',
  'Portable Solar Panel Charger',
  'Smart WiFi Outdoor Plug',
  'Adjustable Dumbbell Bench',
  'Wireless Touchpad Keyboard',
  'Electric Fireplace Heater',
  'Portable Bluetooth Karaoke Machine',
  'Smart',
];

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export interface MarketListingData {
  id: number;
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
  title: string;
  description: string;
  price: number;
}

export async function getMockMarketListings(
  size: number,
): Promise<MarketListingData[]> {
  const listings: MarketListingData[] = [];
  for (let i = 0; i < size; i++) {
    const height = randomNumber(400, 600);
    const width = randomNumber(400, 600);
    const title = adTitles[randomNumber(0, adTitles.length - 1)];
    const price = randomNumber(1, 2500);
    listings.push({
      id: i,
      imageUrl: `https://picsum.photos/${width}/${height}`,
      imageHeight: height,
      imageWidth: width,
      title,
      description: MOCK_DESCRIPTION,
      price,
    });
  }
  return listings;
}
