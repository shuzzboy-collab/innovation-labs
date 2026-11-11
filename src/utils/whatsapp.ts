/**
 * WhatsApp Integration Utilities for InnovationLab
 * Target WhatsApp Number: 03330241899 (International format: 923330241899)
 */

export const WHATSAPP_DISPLAY_NUMBER = '03330241899';
export const WHATSAPP_INTL_NUMBER = '923330241899';

export interface ConsultationFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  date?: string;
  timeSlot?: string;
  notes?: string;
  formType?: string;
}

/**
 * Formats client submission details into a structured, readable WhatsApp message
 */
export function formatWhatsAppMessage(data: ConsultationFormData): string {
  const lines: string[] = [
    `*🚀 New Client Inquiry - InnovationLab*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Client Name:* ${data.name || 'Not provided'}`,
    `📧 *Email:* ${data.email || 'Not provided'}`,
    `🏢 *Company:* ${data.company ? data.company : 'Individual / Not specified'}`,
    `💼 *Service:* ${data.service || 'AI Solutions & Automation'}`,
    `💰 *Budget Range:* ${data.budget || 'To be discussed'}`,
    `⏱️ *Timeline:* ${data.timeline || 'Flexible'}`,
  ];

  if (data.date || data.timeSlot) {
    lines.push(`📅 *Preferred Schedule:* ${data.date || 'Immediate'} ${data.timeSlot ? `(${data.timeSlot})` : ''}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`📝 *Project Details:* \n${data.notes.trim()}`);
  }

  if (data.formType) {
    lines.push(`📌 *Source Form:* ${data.formType}`);
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`_Submitted via InnovationLab Web Portal_`);

  return lines.join('\n');
}

/**
 * Generates direct wa.me link with pre-filled message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const base = `https://wa.me/${WHATSAPP_INTL_NUMBER}`;
  if (!customMessage) {
    const defaultMsg = `Hello InnovationLab team, I am interested in your AI Agents and enterprise automation solutions. My phone/contact:`;
    return `${base}?text=${encodeURIComponent(defaultMsg)}`;
  }
  return `${base}?text=${encodeURIComponent(customMessage)}`;
}

/**
 * Triggers safe client-side redirection to WhatsApp using anchor element
 */
export function sendFormDataToWhatsApp(data: ConsultationFormData): string {
  const message = formatWhatsAppMessage(data);
  const targetUrl = getWhatsAppUrl(message);

  try {
    const anchor = document.createElement('a');
    anchor.href = targetUrl;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  } catch (error) {
    console.warn('Automatic WhatsApp redirect trigger failed; fallback link provided:', error);
  }

  return targetUrl;
}
