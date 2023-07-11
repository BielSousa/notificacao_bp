from flask import Blueprint, jsonify

bp = Blueprint(
    'notificacoes', __name__, 
    template_folder='templates',
    static_folder='static', 
    static_url_path='/notificacoes/static',
    url_prefix='/notificacoes'
    )

@bp.route('/')
def notificacao():
    return 'Esta é uma notificação'

@bp.route('/notificar_demanda/')
def notificar_demanda():
    return jsonify({'msg':'Sua demanda foi aberta com sucesso!', 'category':'success'})

@bp.route('/notificar_solicitacao_acesso_card/')
def notificar_solicitacao_acesso_card():
    card = {'name':'Card_teste', 'id_card':0}
    return jsonify({'msg':f'Você solicitou acesso ao card {card["name"]}!', 'category':'success', 'card':card})